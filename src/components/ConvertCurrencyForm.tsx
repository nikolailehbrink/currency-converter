import { useEffect, useState } from "react";
import { APIPayload } from "../types/api";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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
    <form className="flex gap-2 max-sm:flex-col">
      <div className="flex gap-2">
        <Input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <Select
          name="fromCurrency"
          value={fromCurrency}
          onValueChange={(e) => setFromCurrency(e)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {supportedCurrencies.map(({ currency, name }) => (
              <SelectItem key={currency} value={currency}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2 max-sm:flex-row-reverse">
        <Select
          name="toCurrency"
          value={toCurrency}
          onValueChange={(e) => setToCurrency(e)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {supportedCurrencies.map(({ currency, name }) => (
              <SelectItem key={currency} value={currency}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input type="text" value={convertedAmount.toFixed(2)} readOnly />
      </div>
      {errorMessage && <p className="bg-red-300">{errorMessage}</p>}
    </form>
  );
}
