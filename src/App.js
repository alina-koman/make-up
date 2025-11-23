import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import ProductPage from './components/productPage/ProductPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <div className="App">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;