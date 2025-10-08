import './App.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import ContactSection from './components/form';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <FeaturedWork />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default App;
