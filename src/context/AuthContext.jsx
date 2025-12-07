import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Перевірка при завантаженні сторінки, чи є користувач у пам'яті браузера
    useEffect(() => {
        const storedUser = localStorage.getItem('userEmail');
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    // Функція входу
    const login = (email) => {
        localStorage.setItem('userEmail', email);
        setUser(email);
    };

    // Функція виходу (очищення)
    const logout = () => {
        localStorage.removeItem('userEmail'); // Видаляємо з LocalStorage
        setUser(null);                        // Скидаємо стан у React
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Хук для використання цього контексту в інших компонентах
export const useAuth = () => {
    return useContext(AuthContext);
};