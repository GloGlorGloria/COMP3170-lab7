import { useEffect, useState } from 'react';
import { Link, useNavigate, NavLink} from "react-router-dom";
import Details from './Details';


function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('idle');
  const navigate = useNavigate();
  const isLoading = fetchStatus === 'loading';
  const isError = fetchStatus === 'error';
  
  useEffect(() => {
    async function fetchData() {
      try {
        setFetchStatus('loading');
        const response = await fetch('https://restcountries.com/v3.1/name/kingdom');
        const data = await response.json();
        setCountries(data);
        setSelectedCountry(data);
        setFetchStatus('idle');
        console.log(countries);
      } catch(e){
        setFetchStatus('error');
        console.error(e.message);
      }
    }
    fetchData();

  }, []);
  console.log(countries);
  
  const handleCountrySelect = (event) => {
    const countryName = event.target.value;
    
    selectedCountry(countries.find((country) => country.name.common === countryName));
    console.log(selectedCountry);
    console.log(`/countries/${selectedCountry.cca2}`);
    if (countryName === "Select a Country") {
      navigate("/");
      return;
    }
    navigate(`/countries/${selectedCountry.cca2}`, { state: {selectedCountry} });
  };
  
  return (
    <div>
      <h1><NavLink to="/">World Kingdoms</NavLink></h1>
      <div className='select_container'>
        <select onChange={handleCountrySelect} >
          <option defaultValue={"Select a Country"} >Select a Country</option>
          {countries.map((country, index) => (
            <option 
            key={index} 
            value={country.name.common}
            >
            {country.name.common}
            </option>
          ))}
        </select>
      </div>

      <Details/>
    
      
      </div>
    );
  }
  
  export default Countries;
  
  