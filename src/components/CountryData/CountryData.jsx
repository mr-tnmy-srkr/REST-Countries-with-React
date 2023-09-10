//  props drilling
const CountryData = (props) => {
    return (
        <div>
           <p><small> Country data : {props.country.name.common}</small></p>
        </div>
    );
};

export default CountryData;