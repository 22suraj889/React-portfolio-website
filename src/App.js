import React, { useEffect } from "react";
import Navigation from "./Components/Navigation";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Style from "./App.module.css";
import Hamburger from "./Components/UI/Hamburger";
import AppProvider from "./Context/AppProvider";
import DarkMode from "./Components/DarkMode";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import StyleElement from "./Components/Pages/Style/StyleElement";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Contact from "./Components/Pages/Contact/Contact";
const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AppProvider>
      <StyleElement />
      <div className={Style["app"]}>
        <Hamburger />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <DarkMode />
      </div>
    </AppProvider>
  );
};

export default App;
