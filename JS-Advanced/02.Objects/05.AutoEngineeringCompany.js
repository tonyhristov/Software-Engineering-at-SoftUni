function solve(input) {
   let brands = {};

   for (let line of input) {
      let [made, model, quantity] = line.split(' | ');
      quantity = Number(quantity);

      if (!brands.hasOwnProperty(made)) {
         brands[made] = {};
      }

      let models = brands[made];
      if (!models.hasOwnProperty(model)) {
         models[model] = 0;
      }
      models[model] += quantity;
   }

   let sortedBrands = Object.keys(brands);
   for (let brand of sortedBrands) {
      console.log(brand);

      let cars = brands[brand];
      let models = Object.keys(cars);
      for (let model of models) {
         console.log(`###${model} -> ${cars[model]}`);
      }
   }
}
