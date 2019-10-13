function solve() {
   let products = new Set();
   let totalPrice = 0;
   let textArea = document.getElementsByTagName('textarea')[0];
   let buttonsAdd = document.querySelectorAll('div> button.add-product');

   Array.from(buttonsAdd).map(e =>
      e.addEventListener('click', function add(e) {
         let product = e.target.parentNode.parentNode.getElementsByClassName(
            'product-title'
         )[0].innerHTML;
         let price = e.target.parentNode.parentNode.getElementsByClassName(
            'product-line-price'
         )[0].innerHTML;
         products.add(product);
         totalPrice += Number(price);
         textArea.innerHTML += `Added ${product} for ${price} to the cart.\n`;
      })
   );

   let checkoutBtn = document.getElementsByClassName('checkout')[0];
   checkoutBtn.addEventListener('click', () => {
      textArea.innerHTML += `You bought ${Array.from(products).join(
         ', '
      )} for ${totalPrice.toFixed(2)}.`;
      buttonsAdd[0].disabled = true;
      buttonsAdd[1].disabled = true;
      buttonsAdd[2].disabled = true;
      checkoutBtn.disabled = true;
   });
}
