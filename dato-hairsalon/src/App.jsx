import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './HomePage';
import ErrorPage from './ErrorPage';
import Outlet from './Outlet.jsx';
import './App.css'

function App() {

 
  

  return (
    <>
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />}/>

        <Route path="/outlet" element={<Outlet />} /> 

         {/* Fallback routes for handling errors */}         
         <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
