import { getPartials, setHeaderInfo } from '../shared.js';
import { get, post, put, del } from '../requester.js';

const partials = getPartials();

export function getHome(ctx) {
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
}
