import { useEffect, useState } from 'react';
import {useNavigate, NavLink, Outlet} from "react-router-dom";


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
      if (countryName === "Select a Country") {
        navigate("/");
        return;
      }
    const selectedCountry = countries.find((country) => country.name.common === countryName);
    console.log(selectedCountry);
    console.log(`/countries/${selectedCountry.cca2}`);
    
   
    navigate(`/countries/${selectedCountry.cca2}`, { state: {selectedCountry} });
  };
  
  return (
    <div>
      <h1><NavLink to="/">World Kingdoms</NavLink></h1>
      <div className='select_container'>
        <select onChange={handleCountrySelect} >
          <option>Select a Country</option>
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

      <Outlet/>
    
      
      </div>
    );
  }
  
  export default Countries;
  
  