import './sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Навигация</h3>
      <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/news">Новости</a></li>
        <li><a href="/about">Об авторе</a></li>
        <li><a href="/services">Услуги</a></li>
        <li><a href="/contacts">Контакты</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;