const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const path = require('path');
const formidable = require('formidable');
const breeds = require('../data/breeds.json');
const cats = require('../data/cats.json');
const catHelper = require('./helpers/catHelper');

module.exports = (req, res) => {
   const pathname = url.parse(req.url).pathname;

   if (pathname === '/cats/add-cat' && req.method === 'GET') {
      catHelper.findPath(res, 'addCat.html');
   } else if (pathname === '/cats/add-cat' && req.method === 'POST') {
      let form = new formidable.IncomingForm();

      form.parse(req, (err, fields, files) => {
         if (err) {
            console.log(err);
         }

         catHelper.processingPostReq(req, res, 'cats.json', fields, files);
      });
   } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
      catHelper.findPath(res, 'addBreed.html');
   } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
      catHelper.processingPostReq(req, res, 'breeds.json');
   } else if (pathname.includes('/cats-edit') && req.method === 'GET') {
      renderingHtml(req, res, 'editCat.html');
   } else if (pathname.includes('/cats-edit') && req.method === 'POST') {
      //TODO
   } else if (
      pathname.includes('/cats-find-new-home') &&
      req.method === 'GET'
   ) {
      renderingHtml(req, res, 'catShelter.html');
   } else if (
      pathname.includes('/cats-find-new-home') &&
      req.method === 'POST'
   ) {
      //TODO
   } else {
      return true;
   }
};
function renderingHtml(req, res, pathname) {
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
               modifiedData = modifiedData.replace(
                  '{{catBreeds}}',
                  `<option value="${cat.breed}" selected>${cat.breed}</option>`
               );
            } else {
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
            }

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
