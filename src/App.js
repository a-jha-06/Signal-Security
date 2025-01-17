
import './App.css';
import ServicesSection from './components/Features';

import HeroBanner from './components/hero/HeroBanner';




import Navbar from './components/navbar/navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <ServicesSection />
    </div>
  );
}

export default App;
