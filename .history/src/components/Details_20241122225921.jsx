import { useLocation } from "react-router-dom";

function Details(){
    const location = useLocation();
    const country = location.state.country;
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