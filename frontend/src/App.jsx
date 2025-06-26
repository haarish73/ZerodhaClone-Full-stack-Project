import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Landing_page/home/HomePage.jsx";
import NotFound from "./Landing_page/NotFound.jsx";
import About from "./Landing_page/about/AboutPage.jsx";
import Product from './Landing_page/products/ProductPage.jsx'
import Pricing from "./Landing_page/pricing/PricingPage.jsx"
import Support from "./Landing_page/suports/SupportPage.jsx"
import SignUps from "./Landing_page/signup/signUpPage.jsx";
import Logins from "./Landing_page/login/LoginPage.jsx";
// import Hero from "./Landing_page/suports/Hero.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar should be outside Routes so that it shows on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/signup" element={<SignUps />} />
        <Route path="/login" element={<Logins />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
