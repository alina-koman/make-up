import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

function Register() {
    const { login, user } = useAuth();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Некоректний email').required("Обов'язкове поле"),
            password: Yup.string().min(6, 'Мінімум 6 символів').required("Обов'язкове поле"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Паролі не співпадають')
                .required("Обов'язкове поле")
        }),
        // Додаємо { resetForm } другим параметром у onSubmit
        onSubmit: async (values, { resetForm }) => {
            try {
                // 1. Перевірка користувача
                const checkUser = await axios.get(`http://localhost:5000/users?email=${values.email}`);

                if (checkUser.data.length > 0) {
                    alert('Користувач з таким email вже існує!');
                    return;
                }

                // 2. Створення нового користувача
                const newUser = {
                    email: values.email,
                    password: values.password,
                };

                await axios.post('http://localhost:5000/users', newUser);

                // 3. Успіх
                alert('Реєстрація успішна!');

                // === ОЧИЩЕННЯ ФОРМИ ===
                resetForm();

                // Вхід і перенаправлення
                login(values.email);
                navigate('/');

            } catch (error) {
                console.error("Помилка реєстрації:", error);
                alert("Щось пішло не так. Перевірте сервер.");
            }
        },
    });

    if (user) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Реєстрація</h2>
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
                    <div className="form-group">
                        <label>Підтвердіть пароль</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                        />
                        {formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}
                    </div>
                    <button type="submit" className="btn-auth">Зареєструватися</button>
                </form>
                <p>Вже є акаунт? <Link to="/login">Увійти</Link></p>
            </div>
        </div>
    );
}

export default Register;