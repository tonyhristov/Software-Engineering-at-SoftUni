import { elements } from './html-elements.js';

export function displayStudents(id, FirstName, LastName, FacultyNumber, Grade) {
   const tr = document.createElement('tr');
   const tdId = document.createElement('td');
   const tdFirstName = document.createElement('td');
   const tdLastName = document.createElement('td');
   const tdFacultyNumber = document.createElement('td');
   const tdGrade = document.createElement('td');

   tdId.textContent = id;
   tdFirstName.textContent = FirstName;
   tdLastName.textContent = LastName;
   tdFacultyNumber.textContent = FacultyNumber;
   tdGrade.textContent = Grade;

   tr.append(tdId, tdFirstName, tdLastName, tdFacultyNumber, tdGrade);
   elements.$container().appendChild(tr);
}
