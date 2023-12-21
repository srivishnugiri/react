import React from "react";
import Navigation from "./Navigation";
import Masthead from "./Masthead";
import Footer from "./Footer";
import Contact from "./Contact";
import About from "./About";
import Signinpage from "./Signin";
import Signuppage from "./Signup";
import PortfolioSection from "./PortfolioSection";

function App() {
  return (
    <div>
      <Navigation/>
      <Masthead/>
      <PortfolioSection/>
      <About/>
      <Contact/>
      <Footer/>
      <Signinpage/>
      <Signuppage/>
    </div>
  );
}

export default App;
