import { useEffect, useState } from 'react';


function Landing() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('');
    const [fetchStatus, setFetchStatus] = useState('idle');

    const isLoading = fetchStatus === 'loading';
    const isError = fetchStatus === 'error';

    useEffect(() => {
        async function fetchData() {
          try {
            setFetchStatus('loading');
            const response = await fetch('https://restcountries.com/v3.1/');
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
            <div>
                <div className='select_container'>
                    <select value={country} onChange={handleCountrySelect}>
                    {countries.map((country) => (
                    <option key={country.cca2} value={country.cca2}>
                    {country.name.common}
                    </option>
                ))}
                    </select>
                </div>

                <Outlet/>

            {isLoading ? (
                <p>Loading data...</p>
            ) : isError ? (
                <p>Opps sorry! Error in fetching data</p>
            ) : (
                <Countries data={countries} />
            )}
            </div>
        </div>
    );
}

        export default Landing;
        
    