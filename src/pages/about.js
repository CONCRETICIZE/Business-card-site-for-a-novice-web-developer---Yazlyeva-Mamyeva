import './about.css';

function About() {
  return (
    <article className="about">
      <h1>О нашей команде</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Мы — небольшая веб-студия, которая помогает бизнесу и частным лицам
            получить качественное представительство в интернете.
          </p>
          <p>
            За время работы мы освоили современные технологии: HTML5, CSS3, JavaScript, React.
            Постоянно учимся и следим за трендами, чтобы предлагать вам лучшие решения.
          </p>
          <h2>Наши компетенции</h2>
          <ul className="skills">
            <li>Адаптивная вёрстка (Flexbox, Grid)</li>
            <li>Разработка на React (Create React App, Router, хуки)</li>
            <li>Работа с Git и GitHub</li>
            <li>Основы дизайна в Figma</li>
            <li>Техническая поддержка и доработка сайтов</li>
          </ul>
          <h2>Наша миссия</h2>
          <p>
            Помочь начинающим и растущим проектам получить удобный, современный сайт,
            который будет приносить клиентов и формировать доверие к бренду.
          </p>
        </div>
        <div className="about-photo">
          <img src="https://via.placeholder.com/200" alt="Логотип компании" />
        </div>
      </div>
    </article>
  );
}

export default About;