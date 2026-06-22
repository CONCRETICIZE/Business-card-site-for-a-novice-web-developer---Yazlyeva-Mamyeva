import { createContext, useState } from 'react';
import ru from './locales/ru.json';
import en from './locales/en.json';

const translations = { ru, en };

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ru');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[lang];
    for (const key of keys) {
      if (value[key] === undefined) return path; // fallback
      value = value[key];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}