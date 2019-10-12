function solve() {
   let data = Array.from(document.querySelectorAll('tbody > tr'));
   let searchField = document.getElementById('searchField');
   let button = document.getElementById('searchBtn');

   button.addEventListener('click', searchData);

   function searchData() {
      let regex = new RegExp(searchField.value, 'gim');

      data.map(e => {
         e.classList.remove('select');
         if (e.innerHTML.match(regex) !== null) {
            e.className = 'select';
         }
         searchField.value = '';
      });
   }
}
