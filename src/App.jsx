import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Uppernav from './Component/Uppernav/Uppernav';
import LandingPage from './Pages/LandingPage';
import ContacPage from './Pages/ContactUs'
import Lapland from "./Pages/Lapland";
import Paris from "./Pages/Paris";
import NewYork from "./Pages/NewYork";
import Tokyo from "./Pages/Tokyo";
import Bali from "./Pages/Bali";


const App = () => {
  return (
    <Router>
      <>
        <Uppernav />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContacPage />} />
            <Route path="/lapland" element={<Lapland />} />
            <Route path="/paris" element={<Paris />} />
            <Route path="/newyork" element={<NewYork />} />
            <Route path="/tokyo" element={<Tokyo />} />
            <Route path="/bali" element={<Bali />} />
          </Routes>
        </main>

        <Footer />
      </>
    </Router>
  );
};

export default App;
