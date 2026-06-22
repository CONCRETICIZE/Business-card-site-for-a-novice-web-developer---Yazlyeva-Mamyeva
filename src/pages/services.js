import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';
import './services.css';

function Services() {
  const { t } = useContext(LanguageContext);
  const servicesList = t('services.list'); // массив объектов

  return (
    <section className="services">
      <h1>{t('services.title')}</h1>
      <p className="services-intro">{t('services.intro')}</p>
      <div className="services-grid">
        {Array.isArray(servicesList) && servicesList.map((service, idx) => (
          <div key={idx} className="service-card">
            <h2>{service.title}</h2>
            <p className="price">{service.price}</p>
            <p className="desc">{service.desc}</p>
            <ul className="features">
              {service.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
            <Link to="/contacts" className="order-btn">
              {t('header.contacts')}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;