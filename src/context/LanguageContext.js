// LanguageContext.js
import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language is English

  const translations = {
    en: {
      yourCartItems: "Your Cart Items",
      cartIsEmpty: "Your Shopping Cart is Empty",
      toggleLanguage: "Switch Language",
      // Other English translations...
    },
    de: {
      yourCartItems: "Ihre Warenkorbartikel",
      cartIsEmpty: "Ihr Einkaufswagen ist leer",
      toggleLanguage: "Sprache wechseln",
      // Other German translations...
    },
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "de" : "en"));
    // Toggle between 'en' (English) and 'de' (German)
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
