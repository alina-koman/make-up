import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
    return (
        <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
            <h1 style={{ color: '#28a745', marginBottom: '20px', fontSize: '3rem' }}>Чудово!</h1>
            <h2 style={{ marginBottom: '20px' }}>Дякуємо за ваше замовлення!</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#666' }}>
                Ваше замовлення успішно прийнято. Ми зв'яжемося з вами найближчим часом.
            </p>
            <Link to="/catalog" className="btn btn-dark" style={{ padding: '12px 25px', textDecoration: 'none' }}>
                Повернутися до каталогу
            </Link>
        </div>
    );
}

export default Success;