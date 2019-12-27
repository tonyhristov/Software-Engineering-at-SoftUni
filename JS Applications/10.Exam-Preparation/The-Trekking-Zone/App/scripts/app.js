import { get, post, put, del } from './requester.js';
import { getPartials, setHeaderInfo } from './shared.js';
import * as authHandler from './handlers/authHandler.js';

(() => {
   const app = Sammy('body', function() {
      this.use('Handlebars', 'hbs');

      //Home
      this.get('/', function(ctx) {
         setHeaderInfo(ctx);

         if (ctx.isAuth) {
            get('appdata', 'treks', 'Kinvey').then(treks => {
               ctx.treks = treks;
               this.loadPartials(getPartials()).partial('./views/home.hbs');
            });
         } else {
            this.loadPartials(getPartials()).partial('./views/home.hbs');
         }
      });

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
      this.get('/create', function(ctx) {
         this.loadPartials(getPartials()).partial('./views/trek/create.hbs');
      });
      this.post('/create', function(ctx) {
         const { location, dateTime, description, imageURL } = ctx.params;

         const trek = {
            location,
            dateTime,
            description,
            imageURL,
            organizer: sessionStorage.getItem('username'),
            likesCounter: 0,
         };
         if (location && dateTime && description && imageURL) {
            post('appdata', 'treks', trek, 'Kinvey')
               .then(() => {
                  ctx.redirect('/');
               })
               .catch(console.error);
         }
      });

      //Trek => Details
      this.get('/trek/:id', function(ctx) {
         setHeaderInfo(ctx);
         const id = ctx.params.id;
         get('appdata', `treks/${id}`, 'Kinvey')
            .then(trek => {
               trek.isCreator =
                  sessionStorage.getItem('userId') === trek._acl.creator;
               ctx.trek = trek;

               this.loadPartials(getPartials()).partial(
                  '../views/trek/details.hbs'
               );
            })
            .catch(console.error());
      });

      //Trek => Edit
      this.get('/edit/:id', function(ctx) {
         setHeaderInfo(ctx);
         const id = ctx.params.id;

         get('appdata', `treks/${id}`, 'Kinvey')
            .then(trek => {
               ctx.trek = trek;

               this.loadPartials(getPartials()).partial(
                  '../views/trek/edit.hbs'
               );
            })
            .catch(console.error());
      });
      this.post('/edit/:id', function(ctx) {
         const id = ctx.params.id;
         const {
            location,
            dateTime,
            description,
            imageURL,
            organizer,
            likesCounter,
         } = ctx.params;

         const trek = {
            location,
            dateTime,
            description,
            imageURL,
            organizer,
            likesCounter,
         };
         if (location && dateTime && description && imageURL) {
            put('appdata', `treks/${id}`, trek, 'Kinvey')
               .then(() => {
                  ctx.redirect('/');
               })
               .catch(console.error);
         }
      });

      //Trek => Delete
      this.get('/close/:id', function(ctx) {
         const id = ctx.params.id;

         del('appdata', `treks/${id}`, 'Kinvey')
            .then(() => {
               ctx.redirect('/');
            })
            .catch(console.error());
      });

      //Trek => Like
      this.get('/like/:id', function(ctx) {
         const id = ctx.params.id;

         get('appdata', `treks/${id}`, 'Kinvey')
            .then(trek => {
               trek.likesCounter++;
               return put('appdata', `treks/${id}`, trek, 'Kinvey');
            })
            .then(() => {
               ctx.redirect(`/trek/${id}`);
            })
            .catch(console.error());
      });
   });

   app.run('/');
})();
