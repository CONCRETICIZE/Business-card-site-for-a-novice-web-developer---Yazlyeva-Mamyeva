import { useState, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './contacts.css';

const initialForm = { name: '', email: '', message: '' };

function Contacts() {
  const { t } = useContext(LanguageContext);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Сброс ошибки при изменении поля
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'required';
    if (!formData.email.trim()) {
      newErrors.email = 'required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');
    // Имитация отправки на сервер
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData(initialForm);
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  // Перевод ошибок
  const errorText = {
    required: t('contacts.errors_required') || 'Обязательное поле',
    invalid: t('contacts.errors_invalid') || 'Некорректный формат',
  };

  return (
    <section className="contacts">
      <h1>{t('contacts.title')}</h1>
      <div className="contacts-grid">
        <div className="contact-info">
          <h2>{t('contacts.info_title')}</h2>
          <ul>
            <li>
              <strong>{t('contacts.phone_label')}</strong>{' '}
              <a href={`tel:${t('contacts.phone_value').replace(/\D/g, '')}`}>
                {t('contacts.phone_value')}
              </a>
            </li>
            <li>
              <strong>{t('contacts.email_label')}</strong>{' '}
              <a href={`mailto:${t('contacts.email_value')}`}>{t('contacts.email_value')}</a>
            </li>
            <li>
              <strong>{t('contacts.telegram_label')}</strong>{' '}
              <a href={`https://t.me/${t('contacts.telegram_value').replace('@', '')}`} target="_blank" rel="noreferrer">
                {t('contacts.telegram_value')}
              </a>
            </li>
            <li>
              <strong>{t('contacts.address_label')}</strong> {t('contacts.address_text')}
            </li>
          </ul>
          <div className="social-links">
            <a href="https://vk.com/webcraft" target="_blank" rel="noreferrer" className="social-icon">VK</a>
            <a href="https://github.com/webcraft" target="_blank" rel="noreferrer" className="social-icon">GitHub</a>
            <a href="https://habr.com/ru/users/webcraft" target="_blank" rel="noreferrer" className="social-icon">Habr</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>{t('contacts.form_title')}</h2>

          <div className="form-group">
            <label htmlFor="name">{t('contacts.name_label')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="field-error">{errorText[errors.name]}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">{t('contacts.email_label')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="field-error">{errorText[errors.email]}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">{t('contacts.message_label')}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="field-error">{errorText[errors.message]}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? (t('contacts.sending') || 'Отправка...') : t('contacts.submit')}
          </button>

          {status === 'success' && (
            <p className="form-success">
              {t('contacts.success_msg') || 'Сообщение успешно отправлено!'}
            </p>
          )}
          {status === 'error' && (
            <p className="form-error">
              {t('contacts.error_msg') || 'Произошла ошибка. Попробуйте позже.'}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contacts;