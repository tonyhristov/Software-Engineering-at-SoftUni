const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const path = require('path');
const formidable = require('formidable');
const breeds = require('../../data/breeds.json');
const cats = require('../../data/cats.json');

function handlingPost(req, res, pathname, fields, files, page) {
   if (pathname === 'cats.json') {
      if (page === 'add') {
         const oldPath = files.upload.path;
         const newPath = './content/post-Images/' + files.upload.name;

         fs.rename(oldPath, newPath, (err) => {
            if (err) {
               console.log(err);
            }
            console.log('Files uploaded successfully!');
         });

         savingReq(res, pathname, fields, files);
      } else if (page === 'edit') {
         //TODO
      } else {
         //TODO
      }
   } else if (pathname === 'breeds.json') {
      let formData = '';

      req.on('data', (data) => {
         formData += data;
      });

      req.on('end', () => {
         const body = qs.parse(formData);

         savingReq(res, pathname, body);
      });
   }
}

function savingReq(res, pathName, info, files) {
   fs.readFile(`./data/${pathName}`, 'utf-8', (err, data) => {
      if (err) {
         console.log(err);
      }

      let json = '';
      let dataJSON = JSON.parse(data);
      if (pathName === 'cats.json') {
         dataJSON.push({
            id: cats.length + 1,
            ...info,
            image: files.upload.name,
         });
         json = JSON.stringify(dataJSON);
      } else {
         dataJSON.push(info.breed);
         json = JSON.stringify(dataJSON);
      }

      fs.writeFile(`./data/${pathName}`, json, () => {
         res.writeHead(302, { location: '/' });
         res.end();
      });
   });
}
function findPath(res, pathName) {
   const index = fs.createReadStream(`./views/${pathName}`);

   index.on('data', (data) => {
      if (pathName === 'addCat.html' || pathName === 'editCat.html') {
         const catBreedPlaceholder = breeds.map(
            (breed) => `<option value=${breed}>${breed}</option>`
         );

         const modifiedData = data
            .toString()
            .replace('{{catBreeds}}', catBreedPlaceholder);

         res.write(modifiedData);
      } else {
         res.write(data);
      }
   });

   index.on('end', () => {
      res.end();
   });

   index.on('error', (err) => {
      console.log(err);
   });
}

function renderHtml(req, res, pathname) {
   const index = fs.createReadStream(`./views/${pathname}`);
   const currentCatId = req.url.split('/')[2];

   index.on('data', (data) => {
      cats.map((cat) => {
         if (cat.id == currentCatId) {
            let modifiedData = data.toString().replace('{{cat}}', currentCatId);

            modifiedData = modifiedData.replace('{{name}}', cat.name);
            modifiedData = modifiedData.replace(
               '{{image}}',
               path.join('../content/post-Images/' + cat.image)
            );
            modifiedData = modifiedData.replace(
               '{{description}}',
               cat.description
            );

            if (pathname === 'catShelter.html') {
               modifiedData = modifiedData.replace('{{altName}}', cat.name);
            }

            const breedsOptions = breeds.map((breed) => {
               let renderCount = 0;
               let render = '';

               if (breed === cat.breed && renderCount < 1) {
                  render = `<option value="${cat.breed}" selected>${cat.breed}</option>`;
                  renderCount++;
               } else {
                  render = `<option value="${breed}" >${breed}</option>`;
               }

               return render;
            });
            modifiedData = modifiedData.replace(
               '{{catBreeds}}',
               breedsOptions.join('/')
            );

            res.write(modifiedData);
         }
      });
   });

   index.on('end', () => {
      res.end();
   });

   index.on('error', (err) => {
      console.log(err);
   });
}

module.exports = {
   handlingPost,
   savingReq,
   findPath,
   renderHtml,
};
