import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';
import './home.css';

function Home() {
  const { t } = useContext(LanguageContext);
  const advantages = t('home.advantages_items');
  const servicesList = t('services.list');
  const newsItems = t('news.items');
  const techItems = t('home.tech_items');

  return (
    <div className="homepage">
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>{t('home.title')}</h1>
          <p className="hero-subtitle">{t('home.text1')}</p>
          <div className="hero-actions">
            <Link to="/contacts" className="btn-primary">{t('home.contact_button')}</Link>
            <Link to="/about" className="btn-outline">{t('home.cta_about')}</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" alt={t('home.hero_image_alt')} />
        </div>
      </section>

      {/* Почему мы */}
      <section className="advantages">
        <h2>{t('home.advantages_title')}</h2>
        <div className="cards-grid three">
          {Array.isArray(advantages) &&
            advantages.map((item, i) => (
              <div key={i} className="card">
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Услуги (кратко) */}
      <section className="services-preview">
        <h2>{t('services.title')}</h2>
        <div className="cards-grid four">
          {Array.isArray(servicesList) &&
            servicesList.slice(0, 4).map((service, idx) => (
              <div key={idx} className="card">{service.title}</div>
            ))}
        </div>
        <Link to="/services" className="more-link">{t('home.more_services')}</Link>
      </section>

      {/* Технологии */}
      <section className="technologies">
        <h2>{t('home.tech_title')}</h2>
        <div className="tech-icons">
          {Array.isArray(techItems) && techItems.map((item, i) => <span key={i}>{item}</span>)}
        </div>
      </section>

      {/* Последние новости (превью) */}
      <section className="news-preview">
        <h2>{t('news.title')}</h2>
        <div className="cards-grid three">
          {Array.isArray(newsItems) &&
            newsItems.slice(0, 3).map((item, idx) => (
              <div key={idx} className="card news-card-item">
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="read-more">{t('home.news_read_more')}</span>
              </div>
            ))}
        </div>
        <Link to="/news" className="more-link">{t('home.more_news')}</Link>
      </section>

      {/* Контакты (кратко) */}
      <section className="contacts-short">
        <h2>{t('contacts.title')}</h2>
        <p>{t('contacts.info_title')}</p>
        <Link to="/contacts" className="btn-primary">{t('home.contact_button')}</Link>
      </section>
    </div>
  );
}

export default Home;
