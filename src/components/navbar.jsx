import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context"; // Import your ShopContext
import "./navbar.css";

export const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const { cartItems } = useContext(ShopContext);

  // Calculate the total count of items in the cart
  const totalCount = Object.values(cartItems).reduce((acc, val) => acc + val, 0);

  return (
    
    <div className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={32} />
          {totalCount > 0 && <span className="cart-count">{totalCount}</span>}
        </Link>
      </div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
