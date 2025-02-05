import LandingSection from './Components/LandingSection/LandingSection';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import AboutUsSection from './Components/AboutUsSection/AboutUsSection';
import MapSection from './Components/MapSection/MapSection';
import ContactUsSection from './Components/ContactUsSection/ContactUsSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import LoginIcon from './Components/LoginIcon/LoginIcon';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Wholesale from './Pages/Wholesale/Wholesale';
import { ToastContainer } from 'react-toastify';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import Retail from './Pages/Retail/Retail';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <ToastContainer position='bottom-right' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/wholesale' element={<Wholesale />} />
        <Route path='/retail' element={<Retail />} />
        <Route path='/product/:type/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />

        {/* <Route path='/service/:serviceName' exact component={ServicePage} /> */}
      </Routes>
    </div>
  );
}

const HomePage = () => {
  return(
    <>
      <Menu />
      <LoginIcon />
      <LandingSection />
      <AboutUsSection />
      <MapSection />
      <ContactUsSection />
    </>  
  )
}

export default App;
