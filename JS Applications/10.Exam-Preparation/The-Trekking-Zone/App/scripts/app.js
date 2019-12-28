import * as authHandler from './handlers/authHandler.js';
import * as trekHandler from './handlers/trekHandler.js';
import * as homeHandler from './handlers/homeHandler.js';

(() => {
   const app = Sammy('body', function() {
      this.use('Handlebars', 'hbs');

      //Home
      this.get('/', homeHandler.getHome);

      //USER

      //User => Register
      this.get('/register', authHandler.getRegister);
      this.post('/register', authHandler.postRegister);

      //User => login
      this.get('/login', authHandler.getLogin);
      this.post('/login', authHandler.postLogin);

      //User => Logout
      this.get('/logout', authHandler.getLogout);

      //User => Profile
      this.get('/profile', authHandler.getProfile);

      //TREKS

      //Trek => Create
      this.get('/create', trekHandler.getCreate);
      this.post('/create', trekHandler.postCreate);

      //Trek => Details
      this.get('/trek/:id', trekHandler.getDetails);

      //Trek => Edit
      this.get('/edit/:id', trekHandler.getEdit);
      this.post('/edit/:id', trekHandler.postEdit);

      //Trek => Delete
      this.get('/close/:id', trekHandler.getDelete);

      //Trek => Like
      this.get('/like/:id', trekHandler.getLike);
   });

   app.run('/');
})();
