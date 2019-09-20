function solve(num) {
   let numbersArr = String(num).split('');

   let isSame = true;
   let firstDigit = numbersArr[0];
   for (let i = firstDigit; i < numbersArr.length; i++) {
      let digitsAfterTheFirstOne = numbersArr[i];
      if (firstDigit !== digitsAfterTheFirstOne) {
         isSame = false;
      }
   }

   let sumNumbers = numbersArr.map(Number).reduce((acc, cur) => acc + cur);

   console.log(isSame);
   console.log(sumNumbers);
}
