import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Aside from './components/aside';
import Footer from './components/footer';
import Home from './pages/home';
import News from './pages/news';
import About from './pages/about';
import Contacts from './pages/contacts';
import Services from './pages/services';
import PageWrapper from './components/PageWrapper';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/contacts" element={<PageWrapper><Contacts /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Aside />
      </div>
      <Footer />
    </>
  );
}

export default App;