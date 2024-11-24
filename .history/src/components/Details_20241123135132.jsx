import { useLocation } from "react-router-dom";

function Details(){
    const { state } = useLocation();
    console.log(state);
    if (!state || !state.country) {
        return <div>No country data available. Please go back and select a country.</div>;
      }

    const { selectedCountry } = state;

    return (
        <div>
            <h1>{selectedCountry.name.common}</h1>
            <img src={selectedCountry.flags.png} alt={`Flag of ${selectedCountry.name.common}`}/>
            <div className="country-info">
                <div>
                    <p><span className="info-title">Capital: </span> <span>{selectedCountry.capital}</span></p>
                    <p><span className="info-title">Located in:</span> <span>{selectedCountry.subregion}</span></p>  
                </div>
            </div>
        </div>
    );
}

export default Details;