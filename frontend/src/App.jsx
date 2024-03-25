
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Components/Services';
import About from './Components/About';
import Product from './Components/Product';




function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Product/>
    </>
  )
}

export default App
