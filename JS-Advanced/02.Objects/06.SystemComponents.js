function solve(input) {
   const data = {};

   for (const line of input) {
      const [system, component, subComponent] = line.split(' | ');
      if (!(system in data)) {
         data[system] = { [component]: [subComponent] };
      } else {
         if (!(component in data[system])) {
            data[system][component] = [subComponent];
         } else {
            data[system][component].push(subComponent);
         }
      }
   }

   Object.entries(data)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
      .forEach(system => {
         console.log(system[0]);
         Object.entries(system[1])
            .sort((a, b) => b[1].length - a[1].length)
            .forEach(component => {
               console.log(`|||${component[0]}`);
               component[1].forEach(e => console.log(`||||||${e}`));
            });
      });
}
