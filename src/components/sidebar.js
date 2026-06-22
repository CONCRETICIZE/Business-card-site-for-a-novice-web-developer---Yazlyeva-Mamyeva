import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './sidebar.css';

function Sidebar() {
  const { t } = useContext(LanguageContext);

  return (
    <aside className="sidebar">
      <h3>{t('sidebar.title')}</h3>
      <ul>
        <li><Link to="/">{t('header.home')}</Link></li>
        <li><Link to="/news">{t('header.news')}</Link></li>
        <li><Link to="/about">{t('header.about')}</Link></li>
        <li><Link to="/services">{t('header.services')}</Link></li>
        <li><Link to="/contacts">{t('header.contacts')}</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
