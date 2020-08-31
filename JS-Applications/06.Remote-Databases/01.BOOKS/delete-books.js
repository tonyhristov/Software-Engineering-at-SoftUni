import { del } from './fetch-service.js';
import { actions } from './app.js';

export async function deleteBook(param) {
   if (confirm('Do you really want to Delete this?')) {
      const id = param.id;
      try {
         await del('appdata', `books/${id}`);
         actions['load-books']();
      } catch (err) {
         console.log(err);
      }
   }
}
