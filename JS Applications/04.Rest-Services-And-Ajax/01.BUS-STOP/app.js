function getInfo() {
   const stopIdInput = document.getElementById('stopId');
   const stopName = document.getElementById('stopName');
   const busContainer = document.getElementById('buses');

   const busesUrl = `https://judgetests.firebaseio.com/businfo/${stopIdInput.value}.json`;

   stopName.textContent = '';
   busContainer.textContent = '';

   fetch(busesUrl)
      .then(res => res.json())
      .then(data => {
         const { name, buses } = data;
         stopName.textContent = name;
         Object.entries(buses).map(([busId, busTime]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${busTime}`;
            busContainer.appendChild(li);
         });
      })
      .catch(err => {
         stopName.textContent = 'Error';
      });
}
