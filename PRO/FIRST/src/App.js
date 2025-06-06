import './App.css';
import Features from './Screen/Features';
import Footer from './Component/Footer';
import About from './Screen/About';
import Header from './Component/Header';
import Home from './Screen/Home';
import NewsLetter from './Screen/NewsLetter';
import Pricing from './Screen/Pricing';

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Features/>
    <About/>
    <Pricing/>
    <NewsLetter/>
    <Footer/>
    </>
  );
}

export default App;
