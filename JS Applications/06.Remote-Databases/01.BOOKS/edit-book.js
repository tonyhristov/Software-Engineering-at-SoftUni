import { get, put } from './fetch-service.js';
import { html } from './html-elements.js';
import { actions } from './app.js';

export async function editBookGet(param) {
   const id = param.id;
   try {
      const singleBook = await get('appdata', `books/${id}`);
      const title = html.$getEditTitle();
      const author = html.$getEditAuthor();
      const isbn = html.$getEditIsbn();
      const idElement = html.$getEditId();
      title.value = singleBook.title;
      author.value = singleBook.author;
      isbn.value = singleBook.isbn;
      idElement.value = singleBook._id;
   } catch (err) {
      console.log(err);
   }
}

export async function editBookPost() {
   const title = html.$getEditTitle();
   const author = html.$getEditAuthor();
   const isbn = html.$getEditIsbn();
   const id = html.$getEditId();
   if (title !== null && author !== null && isbn !== null) {
      const data = {
         title: title.value,
         author: author.value,
         isbn: isbn.value,
      };
      if (confirm('Are these the correct parameters?')) {
         try {
            const modified = await put('appdata', `books/${id.value}`, data);
            id.value = '';
            title.value = '';
            author.value = '';
            isbn.value = '';
            actions['load-books']();
         } catch (err) {
            console.log(err);
         }
      }
   }
}
