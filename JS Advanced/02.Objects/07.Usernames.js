function solve(input) {
   let set = new Set();

   for (let line of input) {
      set.add(line);
   }

   let usernames = [...set.keys()].sort((a, b) => sortFunc(a, b));
   for (let users of usernames) {
      console.log(users);
   }

   function sortFunc(a, b) {
      if (a.length != b.length) {
         return a.length - b.length;
      } else {
         return a.localeCompare(b);
      }
   }
}
