import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
  return (
    <div>
      <p>country details:</p>
      <CountryData
      {...props}
      ></CountryData>
    </div>
  );
};

export default CountryDetails
