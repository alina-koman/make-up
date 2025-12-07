export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

// Оновлюємо addToCart: тепер вона приймає quantity (за замовчуванням 1)
export const addToCart = (product, quantity = 1) => ({
    type: ADD_TO_CART,
    payload: { product, quantity } // Передаємо об'єкт з товаром І кількістю
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id
});

export const increaseQuantity = (id) => ({
    type: INCREASE_QUANTITY,
    payload: id
});

export const decreaseQuantity = (id) => ({
    type: DECREASE_QUANTITY,
    payload: id
});