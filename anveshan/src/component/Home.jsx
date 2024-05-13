import React from "react";
import  Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import BestSellers from "./Bestseller.jsx";
import WeBelive from "./WeBelive.jsx";
import SummerSpecial from "./SummerSpecial.jsx";
import Testimonial from "./Testimonial.jsx";
import Video from "./Video.jsx";
import Social from "./Social.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

function Home() {
  
  return (
    <>
      <Link to="/">
        <Navbar />
        <Hero />
        <BestSellers />
        <WeBelive />
        <SummerSpecial />
        <Testimonial />
        <Video />
        <Social />
        <Footer />
      </Link>

     
    </>
  );
}

export default Home;
