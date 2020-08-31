import { addHeaderInfo, partials } from '../helpers.js';

export function about(ctx, app) {
   addHeaderInfo(ctx);
   app.loadPartials(partials).then(function() {
      this.partial('./templates/about/about.hbs');
   });
}

export function home(ctx, app) {
   addHeaderInfo(ctx);
   app.loadPartials(partials).then(function() {
      this.partial('./templates/home/home.hbs');
   });
}
