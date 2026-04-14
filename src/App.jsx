
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompatibleWith from './components/CompatibleWith';
import Features from './components/Features';
import DetectionPatterns from './components/DetectionPatterns';
import Installation from './components/Installation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CompatibleWith />
        <Features />
        <DetectionPatterns />
        <Installation />
      </main>
      <Footer />
    </div>
  )
}

export default App
