const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const path = require('path');
const http = require('http');
// const formidable = require('formidable');
const breeds = require('../data/breeds.json');
const cats = require('../data/cats.json');

module.exports = (req, res) => {
   const pathname = url.parse(req.url).pathname;

   if (pathname === '/cats/add-cat' && req.method === 'GET') {
      findPath(res, 'addCat.html');
   } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
      findPath(res, 'addBreed.html');
   } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
      let formData = '';

      req.on('data', (data) => {
         formData += data;
      });

      req.on('end', () => {
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

function findPath(res, pathName) {
   const index = fs.createReadStream(`./views/${pathName}`);

   index.on('data', (data) => {
      res.write(data);
   });

   index.on('end', () => {
      res.end();
   });

   index.on('error', (err) => {
      console.log(err);
   });
}
