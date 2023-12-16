// LanguageContext.js
import React, { createContext, useState, useContext } from "react";
import enTranslations from "../language/en.json";
import esTranslations from "../language/es.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(enTranslations);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    if (lang === "en") {
      setTranslations(enTranslations);
    } else if (lang === "es") {
      setTranslations(esTranslations);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
