import { get, post, put, del } from './requester.js';
import * as authHandler from './handlers/authHandler.js';
import * as homeHandler from './handlers/homeHandler.js';
import * as recipeHandler from './handlers/recipeHandler.js';
import { setHeaderInfo, getPartials } from './shared.js';

(() => {
   const app = Sammy('#rooter', function() {
      this.use('Handlebars', 'hbs');

      const partials = getPartials();

      //Home
      this.get('/', homeHandler.getHome);

      //User
      this.get('/register', authHandler.getRegister);
      this.post('/register', authHandler.postRegister);

      this.get('/login', authHandler.getLogin);
      this.post('/login', authHandler.postLogin);

      this.get('/logout', authHandler.logout);

      //Recipes => Share
      this.get('/share', recipeHandler.getShare);
      this.post('/share', recipeHandler.postShare);

      //Recipes => Details
      this.get('/recipe/:id', recipeHandler.getDetails);

      //Recipe => Likes
      this.get('/like/:id', recipeHandler.getLikes);

      //Recipe => Edit
      this.get('/edit/:id', recipeHandler.getEdit);
      this.post('/edit/:id', recipeHandler.postEdit);

      //Recipe => Archive
      this.get('/archive/:id', recipeHandler.getArchive);
   });

   app.run('/');
})();
