import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './footer.css';

function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <p>{t('footer.copyright')}</p>
      <p>
        {t('contacts.email_label')} {t('contacts.email_value')} | {t('contacts.phone_label')} {t('contacts.phone_value')}
      </p>
    </footer>
  );
}

export default Footer;
