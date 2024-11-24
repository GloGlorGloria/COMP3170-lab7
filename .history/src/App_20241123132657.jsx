import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';
import Landing from './components/Landing';
import Details from './components/Details';
import './App.css'

function App() {
  return (
       <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Landing/>}/>
            <Route path="countries/:name?" element={<Countries/>}/>
          </Route>
        </Routes>
       </BrowserRouter>
  );
}

export default App
