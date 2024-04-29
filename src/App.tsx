import { useEffect, useState } from "react";
import { APIPayload } from "./types/api";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);

  useEffect(() => {
    async function fetchCurrency() {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${
            import.meta.env.VITE_EXCHANGE_API_KEY
          }/pair/${fromCurrency}/${toCurrency}`
        );
        const data = (await response.json()) as APIPayload;
        console.log(data.conversion_rate);

        setConversionRate(data.conversion_rate);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
    fetchCurrency();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setConvertedAmount(amount * conversionRate);
  }, [conversionRate, amount]);

  return (
    <div className="bg-neutral-200 p-8">
      <div>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <select
          name="fromCurrency"
          defaultValue={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="EUR">EURO</option>
          <option value="USD">USD</option>
          <option value="JPY">YEN</option>
        </select>
        <div>
          <p>{convertedAmount.toFixed(2)}</p>
          <select
            name="toCurrency"
            defaultValue={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="EUR">EURO</option>
            <option value="USD">USD</option>
            <option value="JPY">YEN</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
