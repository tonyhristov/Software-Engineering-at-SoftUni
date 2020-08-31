function attachEvents() {
   const messageBox = document.getElementById('messages');
   const nameInput = document.getElementById('author');
   const messageInput = document.getElementById('content');
   const url = `https://rest-messanger.firebaseio.com/messanger.json`;

   function loadMessages() {
      fetch(url)
         .then(res => res.json())
         .then(data => {
            messageBox.textContent = '';
            displayMessages(data);
         })
         .catch(handleError);
   }

   function displayMessages(data) {
      Object.entries(data).map(([messageId, messageData]) => {
         const { author, content } = messageData;
         messageBox.append(`${author}: ${content}\n`);
      });
   }

   function createMessage() {
      const author = nameInput.value;
      const content = messageInput.value;

      const headers = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ author, content }),
      };

      fetch(url, headers)
         .then(res => res.json())
         .then(() => {
            nameInput.textContent = '';
            messageInput.textContent = '';

            loadMessages();
         })
         .catch(handleError);
   }

   function handleError() {
      console.log('Error');
   }

   return {
      loadMessages,
      createMessage,
   };
}

let result = attachEvents();
