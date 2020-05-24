const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const path = require('path');
<<<<<<< HEAD
const formidable = require('formidable');
=======
const http = require('http');
// const formidable = require('formidable');
>>>>>>> master
const breeds = require('../data/breeds.json');
const cats = require('../data/cats.json');

module.exports = (req, res) => {
   const pathname = url.parse(req.url).pathname;

   if (pathname === '/cats/add-cat' && req.method === 'GET') {
      findPath(res, 'addCat.html');
   } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
      findPath(res, 'addBreed.html');
<<<<<<< HEAD
   } else if (pathname === '/cats/add-cat' && req.method === 'POST') {
      let form = new formidable.IncomingForm();

      form.parse(req, (err, fields, files) => {
         if (err) {
            console.log(err);
         }

         processingPostReq(req, res, 'cats.json', fields, files);
      });
   } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
      processingPostReq(req, res, 'breeds.json');
   } else {
      return true;
   }
};

function processingPostReq(req, res, pathname, fields, files) {
   if (pathname === 'cats.json') {
      const oldPath = files.upload.path;
      const newPath = './content/post-Images/' + files.upload.name;

      fs.rename(oldPath, newPath, (err) => {
         if (err) {
            console.log(err);
         }
         console.log('Files uploaded successfully!');
      });

      savingReq(res, pathname, fields, files);
   } else if (pathname === 'breeds.json') {
=======
   } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
>>>>>>> master
      let formData = '';

      req.on('data', (data) => {
         formData += data;
      });

      req.on('end', () => {
<<<<<<< HEAD
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
         dataJSON.push([
            { id: cats.length + 1, ...info, image: files.upload.name },
         ]);
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
=======
         let body = qs.parse(formData);

         fs.readFile('./data/breeds.json', (err, data) => {
            if (err) {
               console.log(err);
            }

            let breeds = JSON.parse(data);
            breeds.push(body.breed);
            let json = JSON.stringify(breeds);

            fs.writeFile('./data/breeds.json', json, 'utf-8', () =>
               console.log('The breed was uploaded successfully!')
            );
         });
      });

      res.writeHead(302, { location: '/' });
      res.end();
   } else if (pathname === '/cats/add-cat' && req.method === 'POST') {
      //TODO
   } else {
      return true;
   }
};
>>>>>>> master

function findPath(res, pathName) {
   const index = fs.createReadStream(`./views/${pathName}`);

   index.on('data', (data) => {
<<<<<<< HEAD
      if (pathName === 'addCat.html') {
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
=======
      res.write(data);
>>>>>>> master
   });

   index.on('end', () => {
      res.end();
   });

   index.on('error', (err) => {
      console.log(err);
   });
}
