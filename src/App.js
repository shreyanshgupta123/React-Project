import logo from './logo.svg';
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
      {/* <h1>ReactJs</h1>
      <img src={logo}></img> */}
      
    </div>
  );
}

export default App;
