import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './about.css';

function About() {
  const { t } = useContext(LanguageContext);
  const skills = t('about.skills');

  return (
    <article className="about-page">
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>{t('about.title')}</h1>
          <p className="lead">{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>
        <div className="about-hero-image">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80" alt={t('about.hero_image_alt')} />
        </div>
      </section>

      <section className="skills-section">
        <h2>{t('about.skills_title')}</h2>
        <div className="skills-grid">
          {Array.isArray(skills) &&
            skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <span className="skill-icon">✓</span>
                {skill}
              </div>
            ))}
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-card">
          <h2>{t('about.mission_title')}</h2>
          <p>{t('about.mission_text')}</p>
        </div>
      </section>
    </article>
  );
}

export default About;