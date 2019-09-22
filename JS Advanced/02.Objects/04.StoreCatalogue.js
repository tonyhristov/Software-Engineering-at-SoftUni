function solve(input) {
   const ascSort = (a, b) => a.localeCompare(b);

   let catalogue = {};

   for (let line of input) {
      let [name, price] = line.split(' : ');
      price = Number(price);
      let initial = name[0];

      if (!catalogue.hasOwnProperty(initial)) {
         catalogue[initial] = {};
      }

      let products = catalogue[initial];
      if (!products.hasOwnProperty(name)) {
         products[name] = price;
      }
   }

   let sortedInitials = Object.keys(catalogue).sort(ascSort);
   for (const initial of sortedInitials) {
      console.log(initial);
      let products = catalogue[initial];
      let sortedProducts = Object.keys(products).sort(ascSort);

      for (const product of sortedProducts) {
         console.log(`  ${product}: ${products[product]}`);
      }
   }
}
