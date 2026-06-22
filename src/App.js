import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Aside from './components/aside';
import Footer from './components/footer';
import Home from './pages/home';
import News from './pages/news';
import About from './pages/about';
import Contacts from './pages/contacts';
import Services from './pages/services';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Aside />
      </div>
      <Footer />
    </Router>
  );
}

export default App;