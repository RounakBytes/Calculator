function calculateFactorial(number) {
    console.log(url);
    if (number === 0 || number === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(calculateFactorial(50));