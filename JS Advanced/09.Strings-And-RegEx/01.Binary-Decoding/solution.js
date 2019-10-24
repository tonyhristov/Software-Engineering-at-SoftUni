function solve() {
   let input = document.getElementById('input').value;
   let sum = calculateSum(input);
   input = splitInput(input, sum);
   let result = splitGroups(input);

   showResult(result);

   function showResult(result) {
      document.getElementById('resultOutput').innerHTML = result;
   }

   function splitInput(input, sum) {
      let result = input.substring(sum);
      return (result = result.slice(0, result.length - sum));
   }

   function splitGroups(input) {
      let matched = input.match(/.{1,8}/g);
      let result = '';

      matched.forEach(element => {
         let asciiSymbol = String.fromCharCode(binaryToDecimal(element));
         if (asciiSymbol.match(/[A-Za-z]+/gm)) {
            result += asciiSymbol;
         }
      });
      return result;
   }

   function binaryToDecimal(element) {
      return parseInt(Number(element), 2);
   }

   function calculateSum(input) {
      while (input.toString().length > 1) {
         input = spreadSum(input);
      }
      return input;
   }

   function spreadSum(num) {
      return Array.from(num.toString())
         .map(Number)
         .reduce((acc, cur) => acc + cur);
   }
}
