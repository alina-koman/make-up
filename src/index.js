import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// УВАГА: Ось правильний шлях після переміщення папки
import { ProductsProvider } from './context/ProductsContext';

import './styles/reset.css';
import './styles/common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ProductsProvider>
            <App />
        </ProductsProvider>
    </React.StrictMode>
);