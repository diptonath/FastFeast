import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Footer from './components/Footer/Footer'
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {
      showLogin ? <LoginPopup setShowLogin={setShowLogin}/>: <> </>
    }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<PlaceOrder />}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
