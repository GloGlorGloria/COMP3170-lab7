import { useEffect, useState } from 'react';


function Landing() {
  const [countries, setCountries] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle');
  
  const isLoading = fetchStatus === 'loading';
  const isError = fetchStatus === 'error';
  
  useEffect(() => {
    async function fetchData() {
      try {
        setFetchStatus('loading');
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data.slice(0, 17));
        console.log(countries);
        setFetchStatus('idle');
        console.log(countries);
      } catch(e){
        setFetchStatus('error');
        console.error(e.message);
      }
    }
    fetchData();
  }, []);
  
  const handleCountrySelect = (event) => {
    const cca2 = event.target.value;
    const selectedCountry = countries.find((country) => country.cca2 === cca2);
  
    if (selectedCountry) {
      navigate(`/countries/${cca2}`, { state: { country: selectedCountry } });
    }
  };
  
  return (
    <div>
      <h1>World Kingdoms</h1>
      <div className='select_container'>
        <select>
          <option defaultValue={"Select a Country"} >Select a Country</option>
          {countries.map((country, index) => (
            <option 
            key={index} 
            value={country.name.common}
            onClick={() => navigate(`/countries/${country.cca2}`, {state: {country}})}
            >
            {country.name.common}
            </option>
          ))}
        </select>
      </div>
    
      {/* <Outlet/> */}
      
      {/* {isLoading ? (
        <p>Loading data...</p>
        ) : isError ? (
        <p>Opps sorry! Error in fetching data</p>
        ) : (
        <Countries data={countries} />
        )} */}
      </div>
    );
  }
  
  export default Landing;
  
  