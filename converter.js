export function convertTemperature(fromValue, fromUnit, toUnit) {
  let result;

  if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
    result = (fromValue * 9) / 5 + 32;
  } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
    result = fromValue + 273.15;
  } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
    result = ((fromValue - 32) * 5) / 9;
  } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
    result = ((fromValue - 32) * 5) / 9 + 273.15;
  } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
    result = fromValue - 273.15;
  } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
    result = ((fromValue - 273.15) * 9) / 5 + 32;
  } else {
    result = fromValue; // If fromUnit and toUnit are the same, no conversion needed
  }

  return result;
}

export function convertArea(value, fromUnit, toUnit) {
  if (!value || !fromUnit || !toUnit) return;
  const conversions = {
    squareMeters: {
      squareFeet: 10.7639,
      squareYards: 1.19599,
    },
    squareFeet: {
      squareMeters: 0.092903,
      squareYards: 0.111111,
    },
    squareYards: {
      squareMeters: 0.836127,
      squareFeet: 9,
    },
  };

  if (conversions[fromUnit] && conversions[fromUnit][toUnit]) {
    return value * conversions[fromUnit][toUnit];
  } else {
    return "Invalid units or conversion not supported";
  }
}
export function convertCurrency() {
    const fromAmount = parseFloat(document.getElementById("fromAmount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;

   
    const exchangeRates = {
        USD: { EUR: 5.85, GBP: 15.75 },
        EUR: { USD: 8.18, GBP: 6.88 },
        GBP: { USD: 10.34, EUR: 19.14 },
    };

    // Check if the currencies are valid
    if (
        fromCurrency in exchangeRates &&
        toCurrency in exchangeRates[fromCurrency]
    ) {
        const rate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = fromAmount * rate;

        document.getElementById(
            "result"
        ).textContent = `${fromAmount} ${fromCurrency} is equal to ${convertedAmount.toFixed(
            2
        )} ${toCurrency}`;
    } else {
        document.getElementById("result").textContent =
            "Invalid currency selection.";
    }
}
export function decimalToBinary(decimal) {
    let binary = "";
    if (decimal === 0) {
        return "0";
    }
  
    while (decimal > 0) {
        let remainder = decimal % 2;
        binary = remainder.toString() + binary;
        decimal = Math.floor(decimal / 2);
    }
  
    return binary;
  }
