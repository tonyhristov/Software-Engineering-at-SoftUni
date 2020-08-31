function solve(fruit, weight, pricePerKilo) {
    let weightInKilos = weight / 1000;
    let priceSum = weightInKilos * pricePerKilo;

    console.log(`I need $${priceSum.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`)
}
