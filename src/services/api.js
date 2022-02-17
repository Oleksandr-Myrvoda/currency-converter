import axios from "axios";

const BASE_URL =
  "http://data.fixer.io/api/latest?access_key=f16a8aa8b080fd9ca067956202192168";

const getRates = async () => {
  const response = await axios.get(BASE_URL);
  const ratesArr = await response.data.rates;
  return ratesArr;
};

export default {
  getRates,
};
