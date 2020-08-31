function attachEvents() {
   const phoneBookContainer = document.getElementById('phonebook');
   const personInput = document.getElementById('person');
   const phoneInput = document.getElementById('phone');

   const url = 'https://phonebook-nakov.firebaseio.com/phonebook';
   function composeUrl(extension) {
      return `${url}/${extension}.json`;
   }

   function loadPhoneBook() {
      fetch(composeUrl(''))
         .then(res => res.json())
         .then(data => {
            phoneBookContainer.textContent = '';
            displayPhoneBook(data);
         })
         .catch(handleError);
   }

   function displayPhoneBook(data) {
      Object.entries(data).forEach(([elementId, phoneBookData]) => {
         const { phone, person } = phoneBookData;

         const li = document.createElement('li');
         const deleteButton = document.createElement('button');

         li.textContent = `${person}: ${phone}`;
         deleteButton.textContent = 'Delete';
         deleteButton.setAttribute('data-target', elementId);

         deleteButton.addEventListener('click', deletePhone);

         li.appendChild(deleteButton);
         phoneBookContainer.appendChild(li);
      });
   }

   function createPhoneBook() {
      const person = personInput.value;
      const phone = phoneInput.value;

      const headers = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ person, phone }),
      };

      fetch(composeUrl(''), headers)
         .then(res => res.json())
         .then(() => {
            personInput.value = '';
            phoneInput.value = '';

            loadPhoneBook();
         })
         .catch(handleError);
   }

   function deletePhone() {
      const phoneId = this.getAttribute('data-target');

      const headers = {
         method: 'DELETE',
      };

      fetch(composeUrl(`/${phoneId}`), headers)
         .then(data => {
            phoneBookContainer.textContent = '';
            loadPhoneBook();
         })
         .catch(handleError);
   }

   function handleError() {
      console.log('error');
   }

   return {
      loadPhoneBook,
      createPhoneBook,
   };
}

let result = attachEvents();
