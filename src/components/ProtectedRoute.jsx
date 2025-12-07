import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    // Якщо користувача немає (null), перекидаємо на Login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Якщо користувач є, показуємо захищену сторінку
    return children;
};

export default ProtectedRoute;