import { useLocation } from "react-router-dom";

function Details(){
    const { state } = useLocation();
    if (!state || !state.country) {
        return <div>No country data available. Please go back and select a country.</div>;
      }

    const { country } = state;

    return (
        <div>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
            <div className="country-info">
                <div>
                    <p><span className="info-title">Capital: </span> <span>{country.capital}</span></p>
                    <p><span className="info-title">Located in:</span> <span>{country.subregion}</span></p>  
                </div>
            </div>
        </div>
    );
}

export default Details;