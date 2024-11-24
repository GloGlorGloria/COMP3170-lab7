import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';
import Details from './components/Details';
import './App.css'

function App() {
  return (
       <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route path="countries/:cca2" element={<Details/>}/>
          </Route>
        </Routes>
       </BrowserRouter>
  );
}

export default App
