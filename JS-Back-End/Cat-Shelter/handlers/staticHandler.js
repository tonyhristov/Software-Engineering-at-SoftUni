const url = require('url');
const fs = require('fs');

function getContentType(url) {
   if (url.endsWith('css')) {
      return 'text/css';
   } else if (url.endsWith('html')) {
      return 'text/html';
   } else if (url.endsWith('jpg')) {
      return 'text/jpeg';
   } else if (url.endsWith('png')) {
      return 'text/png';
   } else {
      return true;
   }
}

module.exports = (req, res) => {
   const pathname = url.parse(req.url).pathname;

   if (pathname.startsWith('/content') && req.method === 'GET') {
      if (
         pathname.endsWith('png') ||
         pathname.endsWith('jpeg') ||
         pathname.endsWith('jpg') ||
         (pathname.endsWith('ico') && req.method === 'GET')
      ) {
         showingFile(pathname, res);
      } else {
         showingFile(pathname, res, 'utf-8');
      }
   } else {
      return true;
   }
};

function showingFile(pathname, res, encoding) {
   fs.readFile(`./${pathname}`, encoding, (err, data) => {
      if (err) {
         console.log(err);

         res.writeHead(404, {
            'Content-Type': 'text/plain',
         });

         res.write('Error was found');
         res.end();

         return;
      }
      res.writeHead(200, { 'Content-Type': getContentType(pathname) });
      res.write(data);
      res.end();
   });
}
