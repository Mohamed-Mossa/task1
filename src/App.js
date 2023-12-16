import "./App.css";
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { LanguageProvider } from "./context/LanguageContext";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <LanguageProvider>

    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <ShopContextProvider>
        <Router>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
    </LanguageProvider>

  );
}

export default App;
