
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Components/Services';
import About from './Components/About';
import Product from './Components/Product';
import Blog from './Components/Blog';
import Newsletter from './Components/Newsletter';
import MyFooter from './Components/MyFooter';





function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Product/>
    <Blog/>
    <Newsletter/>
    <MyFooter/>
    </>
  )
}

export default App
