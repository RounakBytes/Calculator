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
