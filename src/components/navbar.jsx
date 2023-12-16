import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";
import { LanguageContext } from "../context/LanguageContext";

export const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const { cartItems } = useContext(ShopContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const totalCount = Object.values(cartItems).reduce((acc, val) => acc + val, 0);

  return (
    <div className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <div className="links">
        <Link to="/">{language === "en" ? "Shop" : "Geschäft"}</Link>
        <Link to="/contact">{language === "en" ? "Contact" : "Kontakt"}</Link>
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={32} />
          {totalCount > 0 && <span className="cart-count">{totalCount}</span>}
        </Link>
        <button onClick={toggleLanguage}>
          {language === "en" ? "Switch Language" : "Sprache wechseln"}
        </button>
      </div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
