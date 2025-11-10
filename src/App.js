// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
// import Cart from './components/cart/Cart'; // <-- 1. ВИДАЛИ ЦЕЙ РЯДОК

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;