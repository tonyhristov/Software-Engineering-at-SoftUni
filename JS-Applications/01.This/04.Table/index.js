function solve() {
   Array.from(document.getElementsByTagName('tr'))
      .slice(1)
      .map(tr => {
         tr.addEventListener('click', SelectElement());
      });

   function SelectElement() {
      return function() {
         if (this.hasAttribute('style')) {
            this.removeAttribute('style');
         } else {
            Array.from(this.parentElement.children).map(row => {
               row.removeAttribute('style');
            });
            this.style.backgroundColor = '#413f5e';
         }
      };
   }
}
