import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import './App.css'

function App() {
    const [countries, setCountries] = useState([]);
    const [fetchData, setFetchData] = useState('idle');
    const navigate = useNavigate();
    const isLoading = fetchStatus === 'loading';
    const isError = fetchStatus === 'error';

    useEffect(() => {
        async function fetchData() {
          try {
            setFetchStatus('loading');
            const response = await fetch('https://restcountries.com/v3.1/name/kingdom');
            const data = await response.json();
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

      return (
        <div>
          <h1>Countries of the World</h1>
        <div>
        <div className='filter_container'>
            <p>Filter & sort</p>
            <div className='filterInfo_container'>
              <div className='filter'>
                <input type="checkbox" onChange={handleAlphaChange}/> 
                <label>Alpha</label>
              </div>
            </div>
        </div>
        </div>
        </div>
        )
        }
        
    