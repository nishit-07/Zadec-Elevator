import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Product from './components/Products/Product';
import Accessories from './components/Accessories';
import About from './components/About';
import Contact from './components/Contact';
import Homeelevator from './components/Products/Homeelevator';
import Hydraulicelevator from './components/Products/Hydraulicelevator';
import Capsuleelevator from './components/Products/Capsuleelevator';
import Commercialelevator from './components/Products/Commercialelevator';
import Hospitalelevator from './components/Products/Hospitalelevator';
import Goodselevator from './components/Products/Goodselevator';
import Features from './components/Features';
function App() {
  return (
    <Router>
    <Navbar/>
  <Routes>
  <Route exact path="/"     element={<Home />}></Route> 
  <Route exact path="/Accessories"     element={<Accessories />}></Route> 
  <Route exact path="/About"     element={<About />}></Route> 
  <Route exact path="/Contact"     element={<Contact />}></Route> 

  <Route exact path="/Product"     element={<Product />}></Route> 
  <Route exact path="/Homeelevator"     element={<Homeelevator />}></Route>   
  <Route exact path="/Hydraulicelevator"     element={<Hydraulicelevator />}></Route>   
  <Route exact path="/Capsuleelevator"     element={<Capsuleelevator />}></Route>  
  <Route exact path="/Commercialelevator"     element={<Commercialelevator />}></Route>  
  <Route exact path="/Hospitalelevator"     element={<Hospitalelevator />}></Route>  
  <Route exact path="/Goodselevator"     element={<Goodselevator />}></Route>  

  <Route exact path="/Features"     element={<Features />}></Route>  

  </Routes>
    <Footer/>
    
    <div class="floating-buttons">
    <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" class="whatsapp-button">
      <img src="images/whatsapp (1).png" alt="WhatsApp"/>
    </a>
    <a href="tel:+123456789" class="call-button">
      <img src="images/telephone.png" alt="Call"/>
    </a>
  </div>

    </Router>
  );
}

export default App;
