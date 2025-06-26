import React from 'react';
import { Link } from "react-router-dom";
import homeHero from '../../assets/img/images/homeHero.png'; 
function Hero() {
  return ( 
  
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src={homeHero}
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>
       <Link to="http://localhost:5173/signup" style={{ textDecoration: "none" }}>
  <button
    className="p-2 btn btn-primary fs-5 mb-5"
    style={{ width: "20%", margin: "0 auto", display: "block" }}
  >
    Signup up for free
  </button>
</Link>
      </div>
    </div>
  );
}

export default Hero;
