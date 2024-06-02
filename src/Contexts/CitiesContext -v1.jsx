import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there is error in loading the data ");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      // console.log("this is from inside context ", data);
      setCurrentCity(data);
    } catch {
      alert("there is error in loading the data ");
    } finally {
      setIsLoading(false);
    }
  }
  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log("this is from inside context ", data);
      // console.log(data);
      setCities((city) => [...city, data]);
    } catch {
      alert("there is error in creating the city ");
    } finally {
      setIsLoading(false);
    }
  }
  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      alert("there is error in deleting the city ");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error(
      "you are using this cities context where this Cities Provider is absent"
    );
  return context;
}
export { CitiesProvider, useCities };
