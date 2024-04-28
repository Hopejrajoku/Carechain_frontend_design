import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Stats from './components/Stats';
import Team from './components/Team';
import Features from './components/Features';
import Partners from './components/Partners';
import Transform from './components/Transform';
import Newsletter from './components/Newsletter';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Stats />
      <Team />
      <Features />
      <Partners />
      <Transform />
      <Newsletter />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
