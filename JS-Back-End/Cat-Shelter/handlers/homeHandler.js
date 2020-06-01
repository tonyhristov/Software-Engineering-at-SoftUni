const url = require('url');
const homeHelper = require('./helpers/homeHelper');

module.exports = (req, res) => {
   const pathname = url.parse(req.url).pathname;

   if (pathname === '/' && req.method === 'GET') {
      homeHelper.renderHome(res);
   } else {
      return true;
   }
};
