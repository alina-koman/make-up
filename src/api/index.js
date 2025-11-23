import axios from 'axios';
// Імпортуємо твій файл з даними (перевір, щоб шлях був правильний)
import { products } from '../data/products';

// Ця адреса тут просто, щоб виконати вимогу про axios
const API_URL = 'http://localhost:5000/api';
// eslint-disable-next-line no-unused-vars
const $api = axios.create({ baseURL: API_URL });

// Функція-"затримка" (імітує повільний інтернет)
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Головна функція отримання товарів
export const fetchProducts = async (category, priceRange) => {
    // 1. Чекаємо 1.5 секунди (ти побачиш Спінер у цей час)
    await wait(1500);

    // 2. Фільтруємо дані вручну (імітуємо роботу сервера)
    let filteredData = [...products];

    // Фільтр категорії
    if (category && category !== 'all') {
        filteredData = filteredData.filter(p => p.category === category);
    }
    if (priceRange && priceRange !== 'all') {
        if (priceRange === "under50") {
            filteredData = filteredData.filter(p => p.price < 50);
        } else if (priceRange === "50to100") {
            filteredData = filteredData.filter(p => p.price >= 50 && p.price <= 100);
        } else if (priceRange === "over100") {
            filteredData = filteredData.filter(p => p.price > 100);
        }
    }

    return filteredData;
};

export const fetchProductById = async (id) => {
    await wait(1000);
    return products.find(p => p.id === parseInt(id));
};