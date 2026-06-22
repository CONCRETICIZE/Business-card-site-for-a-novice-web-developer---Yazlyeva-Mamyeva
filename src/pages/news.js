import { useContext, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LanguageContext } from '../LanguageContext';
import './news.css';

function News() {
  const { t } = useContext(LanguageContext);
  const newsItems = t('news.items');

  return (
    <section className="news-page">
      <h1>{t('news.title')}</h1>
      <div className="news-grid">
        {Array.isArray(newsItems) &&
          newsItems.map((item, idx) => (
            <NewsCard key={idx} item={item} index={idx} />
          ))}
      </div>
    </section>
  );
}

function NewsCard({ item, index }) {
  const { t } = useContext(LanguageContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={ref}
      className="news-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <time className="news-date">{item.date}</time>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <span className="read-more">{t('news.read_more')}</span>
    </motion.article>
  );
}

export default News;
