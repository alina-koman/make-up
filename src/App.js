import Header from './components/header/Header';
import Hero from "./components/hero/Hero";
import Popular from "./components/popular/Popular";
import Organic from "./components/organic/Organic";
import Perfect from "./components/perfect/Perfect";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Popular />
        <Organic />
        <Perfect />
        <Footer />
    </div>
  );
}

export default App;
