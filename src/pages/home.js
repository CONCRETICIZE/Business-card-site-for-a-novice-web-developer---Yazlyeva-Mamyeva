import './home.css';

function Home() {
  return (
    <article className="home">
      <h1>WebCraft — ваша digital-команда</h1>
      <p>
        Мы создаём современные адаптивные сайты, которые работают на вас.
        Начинающим бизнесам и частным специалистам мы помогаем заявить о себе в интернете.
      </p>
      <p>
        Наш сайт — это витрина возможностей: портфолио, новости из мира веб-разработки,
        список услуг и простые способы связаться с нами.
      </p>
      <div className="cta">
        <a href="/about" className="button">О студии</a>
        <a href="/contacts" className="button button-outline">Связаться</a>
      </div>
      <div className="avatar-placeholder">
        <img src="https://via.placeholder.com/150" alt="Логотип WebCraft" />
      </div>
    </article>
  );
}

export default Home;