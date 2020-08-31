import { get } from '../requester.js';
import { getPartials, setHeaderInfo, displayLoading } from '../shared.js';

export function getHome(ctx) {
   setHeaderInfo(ctx);

   if (ctx.isAuth) {
      get('appdata', 'treks', 'Kinvey').then((treks) => {
         ctx.treks = treks;

         this.loadPartials(getPartials()).partial('./views/home.hbs');
      });
   } else {
      this.loadPartials(getPartials()).partial('./views/home.hbs');
   }
}
