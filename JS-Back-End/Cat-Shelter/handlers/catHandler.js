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

         catHelper.handlingPost(req, res, 'cats.json', fields, files, 'add');
      });
   } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
      catHelper.findPath(res, 'addBreed.html');
   } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
      catHelper.handlingPost(req, res, 'breeds.json');
   } else if (pathname.includes('/cats-edit') && req.method === 'GET') {
      catHelper.renderHtml(req, res, 'editCat.html');
   } else if (pathname.includes('/cats-edit') && req.method === 'POST') {
      let form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
         if (err) {
            console.log(err);
         }

         fs.readFile('./data/cats.json', 'utf8', (err, data) => {
            if (err) {
               console.log(err);
            }

            let currentCat = JSON.parse(data);
            const catId = req.url.split('/')[2];

            currentCat = currentCat.filter((cat) => cat.catId !== catId);

            currentCat.splice(cats.indexOf(currentCat), 1);

            currentCat.push({
               id: catId,
               ...fields,
               image: files.upload.name,
            });

            let json = JSON.stringify(currentCat);

            fs.writeFile('./data/cats.json', json, () => {
               res.writeHead(302, { location: '/' });
               res.end();
            });
         });
      });
   } else if (
      pathname.includes('/cats-find-new-home') &&
      req.method === 'GET'
   ) {
      catHelper.renderHtml(req, res, 'catShelter.html');
   } else if (
      pathname.includes('/cats-find-new-home') &&
      req.method === 'POST'
   ) {
      fs.readFile('./data/cats.json', 'utf8', (err, data) => {
         if (err) {
            console.log(err);
         }

         let currentCat = JSON.parse(data);
         const catId = req.url.split('/')[2];

         currentCat = currentCat.filter((cat) => cat.catId !== catId);

         currentCat.splice(cats.indexOf(currentCat), 1);

         let json = JSON.stringify(currentCat);

         fs.writeFile('./data/cats.json', json, () => {
            res.writeHead(302, { location: '/' });
            res.end();
         });
      });
   } else {
      return true;
   }
};
