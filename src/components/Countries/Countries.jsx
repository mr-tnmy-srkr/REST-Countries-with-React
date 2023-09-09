import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  //   need to focus
  const [visitedCounties, setVisitedCounties] = useState([]);
  //recap


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  //   need to focus
  const handleVisitedCountry = (country) => {
    console.log("visited");
    // console.log(country);
    // visitedCounties.push(country)   eta diye hobe na
    const newVisitedCountries = [...visitedCounties, country];
    setVisitedCounties(newVisitedCountries);
  };

  return (
    <div>
      <h3>Countries : {countries.length}</h3>

      {/* need to focus */}
      <div>
        <h4>Visited Countries : {visitedCounties.length}</h4>
        <ul>
          {visitedCounties.map((country) => (
            <li key={country.cca3}> {country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            //   need to focus
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
