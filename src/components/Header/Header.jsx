import styles from "./Header.module.css";

const Header = ({ rates, format }) => {
  const { RUB, UAH, USD } = rates;
  const valueUSD = format(UAH / USD);
  const valueRUB = format(UAH / RUB);
  const valueEUR = UAH;
  console.log("valueEUR :>> ", valueEUR);

  return (
    <header className={styles.header}>
      <ul className={styles.ratesList}>
        <li>USD {valueUSD}</li>
        <li>EUR {valueEUR}</li>
        <li>RUB {valueRUB}</li>
      </ul>
    </header>
  );
};

export default Header;
