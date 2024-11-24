import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import './components/App.css'

function Countries() {
    const [countries, setCountries] = useState([]);
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
            console.log(data);
            setFetchStatus('idle');
            console.log(countries);
          } catch(e){
            setFetchStatus('error');
            console.error(e.message);
          }
        }
        fetchData();
      }, []);

      const handleCountrySelect = (country) => {
        navigate(`/countries/${country.cca2}`);
      };
    
      return (
        <div>
          <h1>World Kingdoms</h1>
        <div>
        <div className='select_container'>

            <p>Filter & sort</p>
            <div className='filterInfo_container'>
             <select value={country} onChange={handleCountryChange}>
              <option defaultValue="Select a country">Select a country</option>
              <option value="Norway">Norway</option>
              <option value="Tonga">Tonga</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Sweden">Sweden</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Morocco">Morocco</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Jordan">Jordan</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Denmark">Denmark</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Belgium">Belgium</option>
              <option value="Spain">Spain</option>
              <option value="Cambodia">Cambodia</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Thailand">Thailand</option>
            </select>
            </div>
        </div>
        </div>
        </div>
        )
        }
        
    