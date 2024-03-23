import logo from './logo.svg';
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import MobileProducts from './MobileProducts';
import Cart from './cart';
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/Mobprod' element={<MobileProducts/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
      </Routes>
     
    
      <Footer/>
      {/* <h1>ReactJs</h1>
      <img src={logo}></img> */}
      
    </div>
  );
}

export default App;
