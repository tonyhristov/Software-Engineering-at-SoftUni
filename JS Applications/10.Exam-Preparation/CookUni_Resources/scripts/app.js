import { get, post, put, del } from './requester.js';
import * as authHandler from './handlers/authHandler.js';
import { setHeaderInfo, getPartials } from './shared.js';

(() => {
   const app = Sammy('#rooter', function() {
      this.use('Handlebars', 'hbs');

      const partials = getPartials();

      //Home
      this.get('/', function(ctx) {
         setHeaderInfo(ctx);

         if (ctx.isAuth) {
            partials['error'] = './views/error.hbs';
            get('appdata', 'recipes', 'Kinvey').then(recipes => {
               ctx.recipes = recipes;
               this.loadPartials(partials).partial('./views/home.hbs');
            });
         } else {
            partials['homeAnonymous'] = './views/homeAnonymous.hbs';

            this.loadPartials(partials).partial('./views/home.hbs');
         }
      });

      //User
      this.get('/register', authHandler.getRegister);
      this.post('/register', authHandler.postRegister);

      this.get('/login', authHandler.getLogin);
      this.post('/login', authHandler.postLogin);

      this.get('/logout', authHandler.logout);

      //Recipes => Share
      this.get('/share', function(ctx) {
         setHeaderInfo(ctx);
         this.loadPartials(getPartials()).partial('./views/recipe/share.hbs');
      });
      this.post('/share', function(ctx) {
         const {
            meal,
            ingredients,
            prepMethod,
            description,
            foodImageURL,
            category,
         } = ctx.params;

         const categories = {
            'Vegetables and legumes/beans':
               'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg',
            Fruits:
               'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg',
            'Grain Food':
               'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg',
            'Milk, cheese, eggs and alternatives':
               'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg',
            'Lean meats and poultry, fish and alternatives':
               'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg',
         };

         const recipe = {
            meal,
            ingredients: ingredients.split(' '),
            prepMethod,
            description,
            foodImageURL,
            category,
            likesCounter: 0,
            categoryImageURL: categories[category],
         };

         if (
            meal &&
            ingredients &&
            prepMethod &&
            description &&
            foodImageURL &&
            category
         ) {
            post('appdata', 'recipes', recipe, 'Kinvey')
               .then(() => {
                  ctx.redirect('/');
               })
               .catch(console.error());
         }
      });

      //Recipes => Details
      this.get('/recipe/:id', function(ctx) {
         setHeaderInfo(ctx);
         const id = ctx.params.id;

         get('appdata', `recipes/${id}`, 'Kinvey')
            .then(recipe => {
               recipe.isCreator =
                  sessionStorage.getItem('userId') === recipe._acl.creator;

               ctx.recipe = recipe;

               this.loadPartials(getPartials()).partial(
                  '../views/recipe/recipe-details.hbs'
               );
            })
            .catch(console.error());
      });

      //Recipe => Likes
      this.get('/like/:id', function(ctx) {
         const id = ctx.params.id;
         get('appdata', `recipes/${id}`, 'Kinvey')
            .then(recipe => {
               recipe.likesCounter++;
               return put('appdata', `recipes/${id}`, recipe, 'Kinvey');
            })
            .then(() => {
               ctx.redirect(`recipe/${id}`);
            })
            .catch(console.error());
      });

      //Recipe => Edit
      this.get('/edit/:id', function(ctx) {
         const id = ctx.params.id;
         setHeaderInfo(ctx);

         get('appdata', `recipes/${id}`, 'Kinvey').then(recipe => {
            recipe.ingredients = recipe.ingredients.join(' ');
            ctx.recipe = recipe;

            this.loadPartials(getPartials()).partial(
               '../views/recipe/recipe-edit.hbs'
            );
         });
      });
      this.post('/edit/:id', function(ctx) {
         const id = ctx.params.id;
         const {
            meal,
            ingredients,
            prepMethod,
            description,
            foodImageURL,
            category,
         } = ctx.params;

         const categories = {
            'Vegetables and legumes/beans':
               'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg',
            Fruits:
               'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg',
            'Grain Food':
               'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg',
            'Milk, cheese, eggs and alternatives':
               'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg',
            'Lean meats and poultry, fish and alternatives':
               'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg',
         };

         const recipe = {
            meal,
            ingredients: ingredients.split(' '),
            prepMethod,
            description,
            foodImageURL,
            category,
            likesCounter: 0,
            categoryImageURL: categories[category],
         };

         if (
            meal &&
            ingredients &&
            prepMethod &&
            description &&
            foodImageURL &&
            category
         ) {
            put('appdata', `recipes/${id}`, recipe, 'Kinvey')
               .then(() => {
                  ctx.redirect(`/recipe/${id}`);
               })
               .catch(console.error());
         }
      });

      //Recipe => Archive
      this.get('/archive/:id', function(ctx) {
         const id = ctx.params.id;

         del('appdata', `recipes/${id}`, 'Kinvey')
            .then(() => {
               ctx.redirect(`/`);
            })
            .catch(console.error());
      });
   });

   app.run('/');
})();
