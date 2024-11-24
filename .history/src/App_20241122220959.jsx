import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
       <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
