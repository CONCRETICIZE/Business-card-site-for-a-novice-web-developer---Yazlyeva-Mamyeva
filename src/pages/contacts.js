import { useState, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './contacts.css';

function Contacts() {
  const { t } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contacts.alert').replace('{{name}}', formData.name));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contacts">
      <h1>{t('contacts.title')}</h1>
      <div className="contacts-grid">
        <div className="contact-info">
          <h2>{t('contacts.info_title')}</h2>
          <ul>
            <li>
              <strong>{t('contacts.phone')}</strong>{' '}
              <a href="tel:+70000000000">+7 (000) 000-00-00</a>
            </li>
            <li>
              <strong>{t('contacts.email')}</strong>{' '}
              <a href="mailto:hello@webcraft.ru">hello@webcraft.ru</a>
            </li>
            <li>
              <strong>{t('contacts.telegram')}</strong>{' '}
              <a href="https://t.me/webcraft" target="_blank" rel="noreferrer">@webcraft</a>
            </li>
            <li>
              <strong>{t('contacts.address')}</strong> {t('contacts.address_text')}
            </li>
          </ul>
          <div className="social-links">
            <a href="https://vk.com" target="_blank" rel="noreferrer" className="social-icon">VK</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">GitHub</a>
            <a href="https://habr.com" target="_blank" rel="noreferrer" className="social-icon">Habr</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>{t('contacts.form_title')}</h2>
          <div className="form-group">
            <label htmlFor="name">{t('contacts.name_label')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contacts.email_label')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contacts.message_label')}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">{t('contacts.submit')}</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;