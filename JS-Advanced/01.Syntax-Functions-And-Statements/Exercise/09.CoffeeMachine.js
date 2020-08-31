function solve(array) {
   const typesOfCoffee = {
      caffeine: 0.8,
      decaf: 0.9,
   };

   let totalIncome = 0;
   for (let currentOrder of array) {
      let price = 0;
      currentOrder = currentOrder.split(', ');

      let coins = Number(currentOrder[0]);
      let typeOfDrink = currentOrder[1];

      if (typeOfDrink === 'coffee') {
         price += typesOfCoffee[currentOrder[2]];
      } else {
         price = 0.8;
      }

      if (currentOrder.includes('milk')) {
         price = Number((price * 1.1).toFixed(1));
      }

      let quantityOfSugar = Number(currentOrder.pop());
      if (quantityOfSugar) {
         price += 0.1;
      }

      printResult(coins, price, typeOfDrink);
   }

   function printResult(coins, price, typeOfDrink) {
      if (coins >= price) {
         totalIncome += price;
         console.log(
            `You ordered ${typeOfDrink}. Price: $${price.toFixed(2)}`,
            `Change: $${(coins - price).toFixed(2)}`,
         );
      } else {
         console.log(
            `Not enough money for ${typeOfDrink}.`,
            `Need $${(price - coins).toFixed(2)} more.`,
         );
      }
   }

   console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}
