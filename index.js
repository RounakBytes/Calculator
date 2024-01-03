import { decimalToBinary } from "./converter";
import { url } from "./server";

const add = (x, y) => {
    return x + y;
};

const substract = (x, y) => {
    return x - y;
};

const multiply = (x, y) => {
    return x * y;
};

const divide = (x, y) => {
    if (y === 0) {
        console.log("Cannot divide by zero");
        return;
    }

    return x / y;
};
const square = (x) => {
    return x * x;
};

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

console.log(url);
console.log(add(5, 10));
console.log(substract(10, 5));
console.log(multiply(25, 25));
console.log(divide(5, 10));

const areaInSquareMeters = 100; // Replace with your input value
const convertedAreaInSquareFeet = convertArea(areaInSquareMeters, 'squareMeters', 'squareFeet');
const convertedAreaInSquareYards = convertArea(areaInSquareMeters, 'squareMeters', 'squareYards');

const celsiusToFahrenheit = convertTemperature(25, 'Celsius', 'Fahrenheit');
console.log(`25 Celsius is equal to ${celsiusToFahrenheit} Fahrenheit`);

const kelvinToCelsius = convertTemperature(300, 'Kelvin', 'Celsius');
console.log(`300 Kelvin is equal to ${kelvinToCelsius} Celsius`);

const fahrenheitToKelvin = convertTemperature(68, 'Fahrenheit', 'Kelvin');
console.log(`68 Fahrenheit is equal to ${fahrenheitToKelvin} Kelvin`);
console.log(calculateFactorial(50));

console.log(decimalToBinary(50));
