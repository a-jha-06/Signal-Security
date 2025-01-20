
import './App.css';
import ServicesSection from './components/Features';

import HeroBanner from './components/hero/HeroBanner';




import Navbar from './components/navbar/navbar';
import SecuritySection from './components/security-section';
import UnionImage from './components/union image';
import WhoWeAre from './components/Who-are-we';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <ServicesSection />
      <SecuritySection />
      <WhoWeAre />
      <UnionImage/>
    </div>
  );
}

export default App;

