import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './news.css';

function News() {
  const { t } = useContext(LanguageContext);
  const newsItems = t('news.items'); // массив объектов

  return (
    <section className="news">
      <h1>{t('news.title')}</h1>
      <div className="news-grid">
        {Array.isArray(newsItems) && newsItems.map((item, idx) => (
          <article key={idx} className="news-card">
            <time className="news-date">{item.date}</time>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default News;