function solve(input) {
   let uniqueArrays = [];

   let nestedArrays = input.map(JSON.parse);
   for (const arr of nestedArrays) {
      let sum = arr.reduce((a, b) => a + b, 0);
      let containsSum = uniqueArrays.some(
         x => x.reduce((a, b) => a + b, 0) === sum,
      );

      if (!containsSum) {
         uniqueArrays.push(arr.sort((a, b) => b - a));
      }
   }
   let output = uniqueArrays
      .sort((a, b) => a.length - b.length)
      .map(arr => `[${arr.join(', ')}]`)
      .join('\n');

   console.log(output);
}
