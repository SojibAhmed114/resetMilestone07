import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitCountry, setVisitCountry] = useState([]);
  const [addPhoto, setAddPhoto] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handCountryVisit = (country) => {
    const newVisitCountry = [...visitCountry, country];
    setVisitCountry(newVisitCountry);
  };
  const handCountryPhoto = flags => {
    setAddPhoto([...addPhoto, flags]);
  }
  return (
    <div>
      <h3>countries: {countries.length}</h3>
      <div>
        <p>Total Visit: {visitCountry.length}</p>
        <ul>
          {visitCountry.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="photoContainer">
        {addPhoto.map((photo, idx) => (
          <img key={idx} src={photo}></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={countries.cca3}
            handCountryVisit={handCountryVisit}
            handCountryPhoto={handCountryPhoto}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
