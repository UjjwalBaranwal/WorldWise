import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../Contexts/CitiesContext";
function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking value in the map" />
    );
  const countries = cities.reduce((acc, cur) => {
    if (
      !acc
        .map((el) => {
          el.country;
        })
        .includes(cur.country)
    ) {
      return [...acc, { country: cur.country, emoji: cur.emoji }];
    } else return acc;
  }, []);

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </div>
  );
}

export default CountryList;
