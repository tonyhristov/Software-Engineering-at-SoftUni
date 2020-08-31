function solve(input) {
   let numOfRotations = input.pop() % input.length;

   for (let i = 0; i < numOfRotations; i++) {
      input.unshift(input.pop());
   }

   return input.join(' ');
}
