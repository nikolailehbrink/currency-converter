import { useEffect, useState } from "react";
import { APIPayload } from "../types/api";

const supportedCurrencies = [
  {
    currency: "EUR",
    name: "EURO",
  },
  {
    currency: "USD",
    name: "USD",
  },
  {
    currency: "JPY",
    name: "YEN",
  },
];

export default function ConvertCurrencyForm() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchCurrency() {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${
            import.meta.env.VITE_EXCHANGE_API_KEY
          }/pair/${fromCurrency}/${toCurrency}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch currency data.");
        }

        const data = (await response.json()) as APIPayload;
        setConversionRate(data.conversion_rate);
      } catch (error) {
        error instanceof Error && setErrorMessage(error.message);
      }
    }

    if (fromCurrency && toCurrency) {
      fetchCurrency();
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (!isNaN(amount) && conversionRate !== 0) {
      setConvertedAmount(amount * conversionRate);
      setErrorMessage("");
    }
  }, [conversionRate, amount]);

  return (
    <form className="p-4  max-w-md mt-8">
      <div className="flex">
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="m-1 px-1 w-full ring-2 ring-neutral-500 rounded-md"
        />
        <select
          name="fromCurrency"
          defaultValue={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {supportedCurrencies.map(({ currency, name }) => (
            <option key={currency} value={currency}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex">
        <input type="text" value={convertedAmount.toFixed(2)} readOnly />
        <select
          name="toCurrency"
          defaultValue={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {supportedCurrencies.map(({ currency, name }) => (
            <option key={currency} value={currency}>
              {name}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && <p className="bg-red-300">{errorMessage}</p>}
    </form>
  );
}
