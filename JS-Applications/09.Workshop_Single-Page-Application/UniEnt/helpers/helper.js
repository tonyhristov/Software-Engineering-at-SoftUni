import { saveUser, getData } from './storage.js';

export function getTemplate(path, context) {
   context
      .loadPartials({
         header: '../view/common/header.hbs',
         footer: '../view/common/footer.hbs',
         error: '../view/events/error.hbs',
         eventsHolder: '../view/events/eventHolder.hbs',
      })
      .then(function() {
         this.partial(`../view/${path}`);
      });
}

export function saveAndRedirect(context, path, data) {
   saveUser(data);
   context.redirect(path);
}

export function checkContext(context) {
   context.isLogged = false;
   if (getData('userInfo') !== null) {
      context.isLogged = true;
      context.username = JSON.parse(getData('userInfo')).username;
   }
   return context;
}
