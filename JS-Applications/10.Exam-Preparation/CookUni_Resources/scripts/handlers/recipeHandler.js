import { getPartials, setHeaderInfo } from '../shared.js';
import { displayError, displaySuccess, displayLoading } from '../shared.js';
import { get, post, put, del } from '../requester.js';

export function getShare(ctx) {
   setHeaderInfo(ctx);
   this.loadPartials(getPartials()).partial('./views/recipe/share.hbs');
}

export function postShare(ctx) {
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
            displaySuccess('Recipe shared successfully!');
            displayLoading();
            setTimeout(() => {
               ctx.redirect('/');
            }, 1000);
         })
         .catch(() => {
            displayLoading();
            displayError('Something went wrong!');
         });
   }
}

export function getDetails(ctx) {
   setHeaderInfo(ctx);
   const id = ctx.params.id;

   get('appdata', `recipes/${id}`, 'Kinvey')
      .then((recipe) => {
         recipe.isCreator =
            sessionStorage.getItem('userId') === recipe._acl.creator;

         ctx.recipe = recipe;

         this.loadPartials(getPartials()).partial(
            '../views/recipe/recipe-details.hbs'
         );
      })
      .catch(console.error());
}

export function getLikes(ctx) {
   const id = ctx.params.id;
   get('appdata', `recipes/${id}`, 'Kinvey')
      .then((recipe) => {
         recipe.likesCounter++;
         return put('appdata', `recipes/${id}`, recipe, 'Kinvey');
      })
      .then(() => {
         displaySuccess('You have liked it!');
         displayLoading();
         setTimeout(() => {
            ctx.redirect(`recipe/${id}`);
         }, 1000);
      })
      .catch(() => {
         displayLoading();
         displayError('Something went wrong!');
      });
}

export function getEdit(ctx) {
   const id = ctx.params.id;
   setHeaderInfo(ctx);

   get('appdata', `recipes/${id}`, 'Kinvey').then((recipe) => {
      recipe.ingredients = recipe.ingredients.join(' ');
      ctx.recipe = recipe;

      this.loadPartials(getPartials()).partial(
         '../views/recipe/recipe-edit.hbs'
      );
   });
}

export function postEdit(ctx) {
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
            displaySuccess('Successfully Edited!');
            displayLoading();
            setTimeout(() => {
               ctx.redirect(`/recipe/${id}`);
            }, 1000);
         })
         .catch(() => {
            displayLoading();
            displayError('Something went wrong!');
         });
   }
}

export function getArchive(ctx) {
   const id = ctx.params.id;

   del('appdata', `recipes/${id}`, 'Kinvey')
      .then(() => {
         displaySuccess('Successfully Archived!');
         displayLoading();
         setTimeout(() => {
            ctx.redirect(`/`);
         }, 1000);
      })
      .catch(() => {
         displayLoading();
         displayError('Something went wrong!');
      });
}
