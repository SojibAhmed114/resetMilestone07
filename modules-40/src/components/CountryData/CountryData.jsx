/* eslint-disable react/prop-types */

const CountryData = ({ country, handCountryVisit, handCountryPhoto }) => {
  return (
    <div>
      <p>country name: {country.name.common}</p>
    </div>
  );
};

export default CountryData
