import { post } from './fetch-service.js';
import { html } from './html-elements.js';
import { actions } from './app.js';

export async function addBook() {
   const title = html.$getBookTitle();
   const author = html.$getBookAuthor();
   const isbn = html.$getBookIsbn();
   if (title !== null && author !== null && isbn !== null) {
      const data = {
         title: title.value,
         author: author.value,
         isbn: isbn.value,
      };
      try {
         await post('appdata', 'books', data);
         title.value = '';
         author.value = '';
         isbn.value = '';
         actions['load-books']();
      } catch (err) {
         console.log(err);
      }
      alert('Great! You successfully created a book!');
   }
}
