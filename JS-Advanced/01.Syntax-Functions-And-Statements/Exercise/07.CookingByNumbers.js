function solve(array) {
    let number = Number(array.shift());

    let operations = {
        chop: (num) => { return (num / 2) },
        dice: (num) => { return (Math.sqrt(num)) },
        spice: (num) => { return (++num) },
        bake: (num) => { return (num *= 3) },
        fillet: (num) => { return (num -= (num * 0.20)) }
    };

    for (let i = 0; i < array.length; i++) {
        number = operations[array[i]](number);
        console.log(number);
    }
}
