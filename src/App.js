import React, { useState, useEffect } from "react";

import api from "./services/api";
import Header from "./components/Header";
import Converter from "./components/Converter";
import "./App.css";

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");
  const [rates, setRates] = useState([]);

  // console.log("rates", rates.AED);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const arr = await api.getRates();
  //     console.log("arr", arr);
  //     setRates(arr);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    api.getRates().then((ratesArr) => {
      console.log("response", ratesArr);
      setRates(ratesArr);
    });
  }, []);

  useEffect(() => {
    if (!!rates) {
      handleAmount1Change(1);
    }
  }, [rates]);

  const format = (number) => {
    return +number.toFixed(4);
  };

  const handleAmount1Change = (amount1) => {
    console.log("rates[currency2]", rates[currency2]);
    console.log("rates[currency1]", rates[currency1]);
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
    console.log("amount1", amount1);
  };
  const handleCurrency1Change = (currency1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  };
  const handleAmount2Change = (amount2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  };
  const handleCurrency2Change = (currency2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  };
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
