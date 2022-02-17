import PropTypes from "prop-types";

import styles from "./Converter.module.css";

// const Converter = (props) => {
//   console.log("props :>> ", props.currencies);
//   return (
//     <div className={styles.converter}>
//       <input
//         type="text"
//         value={props.amount}
//         onChange={(e) => props.onAmountChange(e.target.value)}
//       />
//       <select
//         value={props.currency}
//         onChange={(e) => props.onCurrencyChange(e.target.value)}
//       >
//         {props.currencies.map((currency) => (
//           <option key={currency.ccy} value={currency.ccy}>
//             {currency.ccy}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };
const Converter = (props) => {
  console.log("props :>> ", props);
  return (
    <div className={styles.converter}>
      <input
        type="text"
        value={props.amount}
        onChange={(e) => props.onAmountChange(e.target.value)}
      />
      <select
        value={props.currency}
        onChange={(e) => props.onCurrencyChange(e.target.value)}
      >
        {props.currencies.map((currency) => (
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
