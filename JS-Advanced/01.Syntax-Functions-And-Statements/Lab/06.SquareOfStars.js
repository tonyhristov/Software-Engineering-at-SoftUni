function solve(num = 5) {
    let result = new Array(num);

    for (let i = 0; i < num; i++) {
        result[i] = "*".repeat(num).split("").join(" ");
    }
    return result.join("\n");
}
