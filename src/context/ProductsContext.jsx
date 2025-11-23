import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchProducts } from '../api';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadProducts = async (category = 'all', priceRange = 'all') => {
        try {
            setIsLoading(true);
            const data = await fetchProducts(category, priceRange);
            setItems(data);
            setError(null);
        } catch (err) {
            console.error("Помилка завантаження:", err);
            setError("Не вдалося завантажити товари. Перевірте, чи запущено сервер.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{
            items,
            isLoading,
            error,
            loadProducts
        }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    return useContext(ProductsContext);
};