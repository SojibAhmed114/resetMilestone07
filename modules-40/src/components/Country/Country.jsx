/* eslint-disable react/prop-types */

import { useState } from "react";
import "./country.css";
import CountryDetails from "../CountryDetails/CountryDetails";
export default function Country({ country, handCountryVisit, handCountryPhoto }) {
  const { name, flags, population, area } = country;

  const [visited, setVisited] = useState(false);

  const handleClick = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? "visitedCss" : "noVisited"}`}>
      <h3 style={{ color: visited ? "white" : "black" }}>
        name: {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>population: {population}</p>
      <p>area: {area}</p>
      <button onClick={() => handCountryVisit(country)}>visit now</button>{" "}
      <br />
      <button onClick={() => handCountryPhoto(country.flags.png)}>
        add photo
      </button>
      <button onClick={handleClick}>
        {visited ? "visit done" : "booking now"}
      </button>
      {visited ? "i have visit this place" : "i went to visit"}
      <hr />
      <CountryDetails
        handCountryPhoto={handCountryPhoto}
        handCountryVisit={handCountryVisit}
        country={country}
      ></CountryDetails>
    </div>
  );
}
