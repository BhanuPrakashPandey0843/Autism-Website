import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Uppernav from './Component/Uppernav/Uppernav';
import LandingPage from './Pages/LandingPage';


const App = () => {
  return (
    <Router>
      <>
        <Uppernav />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>

        <Footer />
      </>
    </Router>
  );
};

export default App;
