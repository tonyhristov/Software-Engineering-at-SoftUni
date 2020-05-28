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
      //TODO
   } else if (pathname.includes('/cats-edit') && req.method === 'POST') {
      //TODO
   } else if (
      pathname.includes('/cats-find-new-home') &&
      req.method === 'GET'
   ) {
      //TODO
   } else if (
      pathname.includes('/cats-find-new-home') &&
      req.method === 'POST'
   ) {
      //TODO
   } else {
      return true;
   }
};
