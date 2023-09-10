import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // or besi props ache bole
  const  {country,handleVisitedCountry,handleVisitedFlag} = props;
  return (
    <div>
    <p>Country Details : {handleVisitedCountry}</p>

    {/* web */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
