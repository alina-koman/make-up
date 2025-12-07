import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

function Login() {
    const { login, user } = useAuth();
    const navigate = useNavigate();

    // 1. СПОЧАТКУ ВСІ ХУКИ (useFormik має бути тут)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Некоректний email').required("Обов'язкове поле"),
            password: Yup.string().required("Обов'язкове поле")
        }),
        onSubmit: (values) => {
            login(values.email);
            navigate('/');
        },
    });

    // 2. І ТІЛЬКИ ТЕПЕР ПЕРЕВІРКА І RETURN
    if (user) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Вхід</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                    </div>
                    <button type="submit" className="btn-auth">Увійти</button>
                </form>
                <p>Немає акаунту? <Link to="/register">Зареєструватися</Link></p>
            </div>
        </div>
    );
}

export default Login;