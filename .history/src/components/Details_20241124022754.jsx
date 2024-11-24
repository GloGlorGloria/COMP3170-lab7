import { useLocation } from "react-router-dom";

function Details(){
    const { state } = useLocation();
    console.log(state);
    if (!state || !state.selectedCountry) {
        return <div>No country data available. Please go back and select a country.</div>;
      }

    const { selectedCountry } = state;

    return (
        <div className="details_container">
            <h1>Kingdom of {selectedCountry.name.common}</h1>
            <img src={selectedCountry.flags.png} alt={`Flag of ${selectedCountry.name.common}`}/>
                <div className="info-title">
                    <p><span>Capital: </span> <span>{selectedCountry.capital}</span></p>
                    <p><span >Located in:</span> <span>{selectedCountry.subregion}</span></p>  
                </div>
        </div>
    );
}

export default Details;