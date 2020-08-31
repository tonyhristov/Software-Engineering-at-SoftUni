function solve(input) {
   let result = [];
   let num = 1;
   let count = input.length;

   for (let i = 0; i < count; i++) {
      if (input[i] === 'remove') {
         result.pop();
      } else {
         result.push(num);
      }
      num++;
   }
   return result.length === 0 ? 'Empty' : result.join('\n');
}
