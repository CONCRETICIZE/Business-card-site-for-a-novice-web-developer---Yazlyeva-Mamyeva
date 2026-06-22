import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
        <div className="logo">
            <Link to="/">WebCraft</Link>
            <span className="slogan">создаём цифровые решения</span>
        </div>
      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to="/news">Новости</Link>
        <Link to="/about">Об авторе</Link>
        <Link to="/services">Услуги</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
      <div className="lang-switch">
        <button>RU</button>
        <button>EN</button>
      </div>
    </header>
  );
}

export default Header;