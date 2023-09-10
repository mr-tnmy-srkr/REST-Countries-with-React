/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetails/CountryDetail";

//   need to focus
const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  const { name, flags, population, area, cca3 } = country;
  // console.log(country);
  // console.log(handleVisitedCountry);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "blue" : "green" }}>
        Name : {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>
        <small>Code : {cca3}</small>
      </p>

      {/* need to focus */}
      <button onClick={() => handleVisitedCountry(country)}>
        mark Visited
      </button>
      <br />
      {/* recap */}
      <button onClick={() => handleVisitedFlag(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited this country." : "I want to visit"}
      <hr />
      {/* props drilling */}
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}
      ></CountryDetail>
    </div>
  );
};

export default Country;
