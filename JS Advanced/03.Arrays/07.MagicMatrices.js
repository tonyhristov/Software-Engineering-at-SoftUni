function solve(input) {
   let sum = input[0].reduce((a, b) => a + b);

   let isTrue = true;
   for (let i = 0; i < input.length; i++) {
      let sumRows = input[i].reduce((a, b) => a + b);
      let sumCols = input.map(x => x[i]).reduce((a, b) => a + b);

      if (sumRows !== sumCols || sumCols !== sum || sumRows !== sum) {
         isTrue = false;
      }
   }
   return isTrue;
}
