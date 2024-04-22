import {HomePage} from './HomePage';
import ErrorPage from './ErrorPage';
import Outlet from './Outlet.jsx';
import './App.css'

function App() {

 
  

  return (
    <>
      <HomePage />

      <Outlet /> 

      <ErrorPage />
   
    </>
  )
}

export default App
