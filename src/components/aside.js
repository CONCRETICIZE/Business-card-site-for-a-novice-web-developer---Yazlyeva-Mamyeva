import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './aside.css';

function Aside() {
  const { t } = useContext(LanguageContext);
  const tags = ['React', 'JavaScript', 'CSS', 'HTML', 'Адаптив', 'Figma']; // потом можно брать из переводов

  return (
    <aside className="aside">
      <h3>{t('aside.tags_title') || 'Теги'}</h3>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </aside>
  );
}

export default Aside;