
import './App.css';
import ContactForm from './components/contact-form/contactForm';
import ServicesSection from './components/Features';
import Footer from './components/footer/footer';
import Gallery from './components/gallery/gallery';

import HeroBanner from './components/hero/HeroBanner';




import Navbar from './components/navbar/navbar';
import SafeSection from './components/safety/SafeSection';
import SecuritySection from './components/security-section';
import Directors from './components/union image';
import WhoWeAre from './components/Who-are-we';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <ServicesSection />
      <SecuritySection />
      <WhoWeAre />
      <Directors/>
      <SafeSection />
      <Gallery/>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

