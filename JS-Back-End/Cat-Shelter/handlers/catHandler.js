const url = require('url');
const formidable = require('formidable');
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

         catHelper.handlingPost(req, res, 'cats.json', fields, files, 'edit');
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
      catHelper.handlingPost(req, res, 'cats.json');
   } else {
      return true;
   }
};
