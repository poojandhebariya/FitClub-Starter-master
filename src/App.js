import './App.css';
import Hero from './components/HeroSection/Hero'
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testinomials/Testimonials';
import Joins from './components/Joins/Joins';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Joins/>
      <Footer/>
    </div>
  );
}

export default App;
