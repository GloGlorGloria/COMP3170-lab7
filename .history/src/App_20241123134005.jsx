import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries2';
import Landing from './components/Countries';
import Details from './components/Details';
import './App.css'

function App() {
  return (
       <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Countries/>}/>
            {/* <Route path="countries/:cca2?" element={<Countries/>}/> */}
          </Route>
        </Routes>
       </BrowserRouter>
  );
}

export default App
