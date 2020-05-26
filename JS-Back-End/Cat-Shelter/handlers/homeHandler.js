const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');

module.exports = (req, res) => {
   const pathname = url.parse(req.url).pathname;

   if (pathname === '/' && req.method === 'GET') {
      const index = fs.createReadStream(`./views/home/index.html`);

      index.on('data', (data) => {
         const catPlaceholder = cats.map(
            (cat) =>
               `<li>
                  <img
                     src="${path.join('./content/post-images/' + cat.image)}"
                     alt="${cat.name}"
                  />
                  <h3>${cat.name}</h3>
                  <p><span>Breed: </span>${cat.breed}</p>
                  <p>
                     <span>Description: </span>${cat.description}
                  </p>
                  <ul class="buttons">
                     <li class="btn edit"><a href="/cats-edit/${
                        cat.id
                     }">Change Info</a></li>
                     <li class="btn delete"><a href="/cats-find-new-home/${
                        cat.id
                     }">New Home</a></li>
                  </ul>
               </li>`
         );
         const modifiedData = data
            .toString()
            .replace('{{cats}}', catPlaceholder);

         res.write(modifiedData);
      });

      index.on('end', () => {
         res.end();
      });

      index.on('error', (err) => {
         console.log(err);
      });
   } else {
      return true;
   }
};
