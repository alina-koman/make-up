import axios from 'axios';

const API_URL = 'http://localhost:5000';

const $api = axios.create({
    baseURL: API_URL,
});

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = async (category, priceRange) => {
    await wait(1500);

    const params = {};

    if (category && category !== 'all') {
        params.category = category;
    }

    if (priceRange && priceRange !== 'all') {
        if (priceRange === "under50") {
            params.price_lt = 50;
        } else if (priceRange === "50to100") {
            params.price_gte = 50;
            params.price_lte = 100;
        } else if (priceRange === "over100") {
            params.price_gt = 100;
        }
    }

    const response = await $api.get('/products', { params });

    return response.data;
};

export const fetchProductById = async (id) => {
    await wait(1000);
    const response = await $api.get(`/products/${id}`);
    return response.data;
};