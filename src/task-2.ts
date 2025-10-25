type Currency = "USD" | "EUR" | "UAH"; //enum

interface ConvertCurrency {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrency): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 150, currency: "UAH" });
