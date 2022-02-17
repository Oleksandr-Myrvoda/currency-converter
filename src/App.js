import React, { useState, useEffect, useCallback } from "react";

import api from "./services/api";
import Header from "./components/Header";
import Converter from "./components/Converter";
import "./App.css";

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const arr = await api.getRates();
      setRates(arr);
    };
    fetchData();
  }, []);

  const format = (number) => +number?.toFixed(3);

  const handleAmount1Change = useCallback(
    (amount1) => {
      setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
      setAmount1(amount1);
    },
    [currency1, currency2, rates]
  );

  const handleCurrency1Change = useCallback(
    (currency1) => {
      setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
      setCurrency1(currency1);
    },
    [amount1, currency2, rates]
  );

  const handleAmount2Change = useCallback(
    (amount2) => {
      setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
      setAmount2(amount2);
    },
    [currency1, currency2, rates]
  );

  const handleCurrency2Change = useCallback(
    (currency2) => {
      setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
      setCurrency2(currency2);
    },
    [amount2, currency1, rates]
  );

  useEffect(() => {
    if (Object.keys(rates).length > 0) {
      handleAmount1Change(1);
    }
  }, [rates]);

  const ratesKeysArray = Object.keys(rates);

  return (
    <div className="contaiter">
      <h1>Currency converter</h1>
      <Header rates={rates} format={format} />
      <Converter
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={ratesKeysArray}
        amount={amount1}
        currency={currency1}
      />
      <Converter
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={ratesKeysArray}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
}

export default App;
