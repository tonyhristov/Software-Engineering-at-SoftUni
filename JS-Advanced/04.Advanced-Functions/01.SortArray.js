function solve(arr, sortType) {
   if (sortType === 'asc') {
      return arr.sort((a, b) => {
         return a - b;
      });
   } else {
      return arr.sort((a, b) => {
         return b - a;
      });
   }
}
