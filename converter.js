export function convertCurrency() {
    const fromAmount = parseFloat(document.getElementById("fromAmount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Define exchange rates (replace with actual rates)
    const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.75 },
        EUR: { USD: 1.18, GBP: 0.88 },
        GBP: { USD: 1.34, EUR: 1.14 },
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