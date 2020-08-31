import { get } from './fetch-service.js';
import { html } from './html-elements.js';
import { actions } from './app.js';

export async function displayBooks() {
   try {
      const books = await get('appdata', 'books');
      const booksContainer = html.$getAllBooks();
      const fragment = document.createDocumentFragment();
      books.forEach(b => {
         const tr = document.createElement('tr');
         const titleTd = document.createElement('td');
         const authorTd = document.createElement('td');
         const isbnTd = document.createElement('td');
         const actionsTd = document.createElement('td');
         const editBtn = document.createElement('button');
         const delBtn = document.createElement('button');

         titleTd.textContent = b.title;
         authorTd.textContent = b.author;
         isbnTd.textContent = b.isbn;

         editBtn.textContent = 'Edit';
         editBtn.id = b._id;
         editBtn.addEventListener('click', actions['edit-book-get']);

         delBtn.textContent = 'Delete';
         delBtn.id = b._id;
         delBtn.addEventListener('click', actions['delete-book']);

         actionsTd.appendChild(editBtn);
         actionsTd.appendChild(delBtn);

         tr.appendChild(titleTd);
         tr.appendChild(authorTd);
         tr.appendChild(isbnTd);
         tr.appendChild(actionsTd);

         fragment.appendChild(tr);
      });
      booksContainer.innerHTML = '';
      booksContainer.appendChild(fragment);
   } catch (err) {
      console.log(err);
   }
}
