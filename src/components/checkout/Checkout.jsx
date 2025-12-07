import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios'; // Імпорт axios для HTTP-запитів
import ErrorMessage from '../ui/ErrorMessage';
import './Checkout.css';

function Checkout() {
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cartItems);

    // Схема валідації полів форми
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(15, "Ім'я має бути не довше 15 символів")
            .required("Ім'я є обов'язковим"),
        lastName: Yup.string()
            .max(20, 'Прізвище має бути не довше 20 символів')
            .required("Прізвище є обов'язковим"),
        email: Yup.string()
            .email('Некоректна електронна адреса')
            .required("Email є обов'язковим"),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Телефон повинен містити лише цифри')
            .min(10, 'Мінімум 10 цифр')
            .max(12, 'Максимум 12 цифр')
            .required("Телефон є обов'язковим"),
        age: Yup.number()
            .min(18, 'Вам має бути 18 років')
            .max(100, 'Некоректний вік')
            .required("Вік є обов'язковим"),
        address: Yup.string()
            .min(10, 'Адреса занадто коротка')
            .required("Адреса є обов'язковим"),
    });

    // Налаштування Formik
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            age: '',
            address: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            // 1. Формуємо об'єкт замовлення
            const orderData = {
                customer: values, // Дані з полів форми
                items: cartItems, // Товари з кошика (Redux)
                totalPrice: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
                date: new Date().toLocaleString() // Поточна дата
            };

            try {
                // 2. Відправляємо POST-запит на сервер (зберігаємо замовлення)
                await axios.post('http://localhost:5000/orders', orderData);

                console.log('Замовлення успішно збережено!');

                // 3. Переходимо на сторінку успіху
                navigate('/success');
            } catch (error) {
                console.error('Помилка при збереженні замовлення:', error);
                alert('Не вдалося зберегти замовлення. Перевірте, чи запущено сервер (npm run server).');
            }
        },
    });

    // Якщо кошик порожній, показуємо повідомлення
    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ padding: '50px 0', textAlign: 'center' }}>
                <h2>Ваш кошик порожній</h2>
                <button className="btn btn-dark" onClick={() => navigate('/catalog')} style={{ marginTop: '20px' }}>
                    До каталогу
                </button>
            </div>
        );
    }

    return (
        <div className="container checkout-page">
            <h1 className="checkout-title">Оформлення замовлення</h1>

            <form onSubmit={formik.handleSubmit} className="checkout-form">

                {/* Поле: Ім'я */}
                <div className="form-group">
                    <label htmlFor="firstName">Ім'я</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        className={formik.touched.firstName && formik.errors.firstName ? 'input-error' : ''}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <ErrorMessage message={formik.errors.firstName} />
                    ) : null}
                </div>

                {/* Поле: Прізвище */}
                <div className="form-group">
                    <label htmlFor="lastName">Прізвище</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        className={formik.touched.lastName && formik.errors.lastName ? 'input-error' : ''}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <ErrorMessage message={formik.errors.lastName} />
                    ) : null}
                </div>

                {/* Поле: Email */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <ErrorMessage message={formik.errors.email} />
                    ) : null}
                </div>

                {/* Поле: Телефон */}
                <div className="form-group">
                    <label htmlFor="phone">Телефон (тільки цифри)</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="0991234567"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        className={formik.touched.phone && formik.errors.phone ? 'input-error' : ''}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <ErrorMessage message={formik.errors.phone} />
                    ) : null}
                </div>

                {/* Поле: Вік */}
                <div className="form-group">
                    <label htmlFor="age">Вік</label>
                    <input
                        id="age"
                        name="age"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                        className={formik.touched.age && formik.errors.age ? 'input-error' : ''}
                    />
                    {formik.touched.age && formik.errors.age ? (
                        <ErrorMessage message={formik.errors.age} />
                    ) : null}
                </div>

                {/* Поле: Адреса */}
                <div className="form-group">
                    <label htmlFor="address">Адреса доставки</label>
                    <textarea
                        id="address"
                        name="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        className={formik.touched.address && formik.errors.address ? 'input-error' : ''}
                    />
                    {formik.touched.address && formik.errors.address ? (
                        <ErrorMessage message={formik.errors.address} />
                    ) : null}
                </div>

                <button type="submit" className="submit-btn">
                    Підтвердити замовлення
                </button>
            </form>
        </div>
    );
}

export default Checkout;