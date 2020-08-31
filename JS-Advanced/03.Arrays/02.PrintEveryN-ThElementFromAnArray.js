function solve(input) {
   let step = input.pop();

   return input
      .filter((el, index) => {
         return index % step === 0;
      })
      .join('\n');
}
