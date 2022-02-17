import PropTypes from "prop-types";

import styles from "./Header.module.css";

const Header = ({ rates, format }) => {
  const { RUB, UAH, USD } = rates;

  const valueUSD = format(UAH / USD);
  const valueRUB = format(UAH / RUB);
  const valueEUR = format(UAH);

  return (
    <header className={styles.header}>
      {!!Object.keys(rates).length && (
        <ul className={styles.ratesList}>
          <li>1 USD = {valueUSD} UAH</li>
          <li>1 EUR = {valueEUR} UAH</li>
          <li>1 RUB = {valueRUB} UAH</li>
        </ul>
      )}
    </header>
  );
};

Header.propTypes = {
  rates: PropTypes.object,
  format: PropTypes.func,
};

export default Header;
