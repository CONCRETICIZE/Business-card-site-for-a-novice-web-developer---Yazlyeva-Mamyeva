import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';
import './header.css';

function Header() {
  const { t, lang, toggleLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">{t('header.logo')}</Link>
        <span className="slogan">{t('header.slogan')}</span>
      </div>

      {/* Кнопка-гамбургер (видна только на мобильных) */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Навигация — добавляем класс open при открытом меню */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>{t('header.home')}</Link>
        <Link to="/news" onClick={() => setMenuOpen(false)}>{t('header.news')}</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>{t('header.about')}</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>{t('header.services')}</Link>
        <Link to="/contacts" onClick={() => setMenuOpen(false)}>{t('header.contacts')}</Link>
      </nav>

      <div className="lang-switch">
        <button onClick={toggleLanguage}>
          {lang === 'ru' ? 'EN' : 'RU'}
        </button>
      </div>
    </header>
  );
}

export default Header;