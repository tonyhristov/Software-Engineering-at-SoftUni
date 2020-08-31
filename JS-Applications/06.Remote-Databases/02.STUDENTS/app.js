import { get } from './fetch-service.js';
import { displayStudents } from './display-students.js';
import { elements } from './html-elements.js';

const actions = {
   'load-students': async function() {
      try {
         elements.$container().innerHTML = '';
         const data = await get('appdata', 'students');
         const sorted = data.sort(compare);

         sorted.forEach(student => {
            const { id, FirstName, LastName, FacultyNumber, Grade } = student;

            displayStudents(id, FirstName, LastName, FacultyNumber, Grade);
         });
      } catch (err) {
         console.error();
      }
   },
};

function compare(a, b) {
   if (a.id < b.id) {
      return -1;
   }
   if (a.id > b.id) {
      return 1;
   }
   return 0;
}

function handleEvent(e) {
   if (typeof actions[e.target.id] === 'function') {
      e.preventDefault();
      actions[e.target.id]();
   }
}
(function attachEvents() {
   document.addEventListener('click', handleEvent);
})();
