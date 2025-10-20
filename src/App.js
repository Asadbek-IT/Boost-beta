import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/ui/Intro/Intro";
import Trust from "./components/ui/Trust/Trust";
import Power from "./components/ui/Power/Power";
import SEO from "./components/ui/SEO/SEO";
import Clients from "./components/ui/Clients/Clients";
import Pricing from './components/ui/Pricing/Pricing';
import Outro from "./components/ui/Outro/Outro";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Trust/>
      <Power/>
      <SEO/>
      <Clients/>
      <Pricing/>
      <Outro/>
      <Footer/>
    </div>
  );
}

export default App;
