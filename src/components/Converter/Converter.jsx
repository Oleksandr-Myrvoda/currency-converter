import PropTypes from "prop-types";

import styles from "./Converter.module.css";

const Converter = (props) => {
  const arr = props.currencies.filter(
    (currency) =>
      currency !== "EUR" &&
      currency !== "USD" &&
      currency !== "UAH" &&
      currency !== "RUB"
  );
  const topCurrencies = ["EUR", "RUB", "UAH", "USD", ...arr];

  return (
    <div className={styles.converter}>
      <input
        type="text"
        value={props.amount}
        onChange={(e) => props.onAmountChange(+e.target.value)}
      />
      <select
        value={props.currency}
        onChange={(e) => props.onCurrencyChange(e.target.value)}
      >
        {topCurrencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

Converter.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default Converter;
