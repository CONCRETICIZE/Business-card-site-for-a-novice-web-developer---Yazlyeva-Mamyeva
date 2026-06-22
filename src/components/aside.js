import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './aside.css';

function Aside() {
  const { t } = useContext(LanguageContext);
  const tags = t('aside.tags');
  const stack = t('aside.stack_items');
  const contacts = t('aside.contacts_items');

  return (
    <aside className="aside">
      <div className="aside-block">
        <h4>{t('aside.technologies')}</h4>
        <div className="tags">
          {Array.isArray(tags) && tags.map((tag, index) => <span key={index}>{tag}</span>)}
        </div>
      </div>
      <div className="aside-block">
        <h4>{t('aside.stack')}</h4>
        <ul>
          {Array.isArray(stack) && stack.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <div className="aside-block">
        <h4>{t('aside.contacts')}</h4>
        <ul>
          {Array.isArray(contacts) && contacts.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
