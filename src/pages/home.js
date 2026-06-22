import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';
import './home.css';

function Home() {
  const { t } = useContext(LanguageContext);

  return (
    <article className="home">
      <h1>{t('home.title')}</h1>
      <p>{t('home.text1')}</p>
      <p>{t('home.text2')}</p>
      <div className="cta">
        <Link to="/about" className="button">{t('home.cta_about')}</Link>
        <Link to="/contacts" className="button button-outline">{t('home.cta_contact')}</Link>
      </div>
      <div className="avatar-placeholder">
        <img src="https://via.placeholder.com/150" alt="Logo" />
      </div>
    </article>
  );
}

export default Home;