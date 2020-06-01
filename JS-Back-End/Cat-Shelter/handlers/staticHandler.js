const url = require('url');
const staticHelper = require('./helpers/staticHelper');

module.exports = (req, res) => {
   const pathname = url.parse(req.url).pathname;

   if (pathname.startsWith('/content') && req.method === 'GET') {
      if (
         pathname.endsWith('png') ||
         pathname.endsWith('jpeg') ||
         pathname.endsWith('jpg') ||
         (pathname.endsWith('ico') && req.method === 'GET')
      ) {
         staticHelper.showingFile(pathname, res);
      } else {
         staticHelper.showingFile(pathname, res, 'utf-8');
      }
   } else {
      return true;
   }
};
