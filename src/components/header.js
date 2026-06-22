import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';
import './header.css';

function Header() {
  const { t, lang, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">{t('header.logo')}</Link>
        <span className="slogan">{t('header.slogan')}</span>
      </div>
      <nav className="nav">
        <Link to="/">{t('header.home')}</Link>
        <Link to="/news">{t('header.news')}</Link>
        <Link to="/about">{t('header.about')}</Link>
        <Link to="/services">{t('header.services')}</Link>
        <Link to="/contacts">{t('header.contacts')}</Link>
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