import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import ProductPage from './components/productPage/ProductPage';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Success from './components/checkout/Success';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/ProtectedRoute'; // Наш компонент-охоронець
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/" element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } />

                    <Route path="/catalog" element={
                        <ProtectedRoute>
                            <Catalog />
                        </ProtectedRoute>
                    } />

                    <Route path="/product/:id" element={
                        <ProtectedRoute>
                            <ProductPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/cart" element={
                        <ProtectedRoute>
                            <Cart />
                        </ProtectedRoute>
                    } />

                    <Route path="/checkout" element={
                        <ProtectedRoute>
                            <Checkout />
                        </ProtectedRoute>
                    } />

                    <Route path="/success" element={
                        <ProtectedRoute>
                            <Success />
                        </ProtectedRoute>
                    } />

                    <Route path="*" element={<Navigate to="/login" replace />} />

                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;