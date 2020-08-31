import { displayBooks } from './display-books.js';
import { addBook } from './add-book.js';
import { editBookGet, editBookPost } from './edit-book.js';
import { deleteBook } from './delete-books.js';

export const actions = {
   'load-books': async function() {
      await displayBooks();
   },

   'create-book': async function() {
      await addBook();
   },

   'edit-book-get': async function() {
      await editBookGet(this);
   },

   'edit-book-post': async function() {
      await editBookPost();
   },

   'delete-book': async function() {
      await deleteBook(this);
   },
};

function handleEvent(e) {
   if (typeof actions[e.target.id] === 'function') {
      e.preventDefault();
      actions[e.target.id]();
   }
}

(function attachEvents() {
   document.addEventListener('click', handleEvent);
})();
