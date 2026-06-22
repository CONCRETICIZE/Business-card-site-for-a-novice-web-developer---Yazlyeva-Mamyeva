import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './about.css';

function About() {
  const { t } = useContext(LanguageContext);
  const skills = t('about.skills'); // это массив

  return (
    <article className="about">
      <h1>{t('about.title')}</h1>
      <div className="about-content">
        <div className="about-text">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <h2>{t('about.skills_title')}</h2>
          <ul className="skills">
            {Array.isArray(skills) && skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
          <h2>{t('about.mission_title')}</h2>
          <p>{t('about.mission_text')}</p>
        </div>
        <div className="about-photo">
          <img src="https://via.placeholder.com/200" alt="Company logo" />
        </div>
      </div>
    </article>
  );
}

export default About;