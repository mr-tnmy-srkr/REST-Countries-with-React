import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  //   need to focus
  const [visitedCounties, setVisitedCounties] = useState([]);
  //recap
  const [visitedFlags, setVisitedFlags] = useState([]);

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
    // console.log("visited");
    // console.log(country);
    // visitedCounties.push(country)   eta diye hobe na
    const newVisitedCountries = [...visitedCounties, country];
    setVisitedCounties(newVisitedCountries);
  };

  //recap
  const handleVisitedFlag = (flag) => {
    // console.log('flag');
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

/* concept
remove item from an array in a state.
use filter to select all the elements except the one you want to remove 
more on react.dev->updating array in state
*/


  return (
    <div>
      <h3>Countries : {countries.length}</h3>

      {/* need to focus */}
      {/* visited countries */}
      <div>
        <h4>Visited Countries : {visitedCounties.length}</h4>
        <ul>
          {visitedCounties.map((country) => (
            <li key={country.cca3}> {country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* recap */}
      {/* visited flags */}
      <div className="flag-container">
        {visitedFlags.map((flag,idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            //   need to focus
            handleVisitedCountry={handleVisitedCountry}
            // recap
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
