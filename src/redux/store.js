import { createStore } from 'redux';
import { cartReducer } from './reducers'; // Імпортуємо наш редьюсер

// Створюємо сховище, передаючи туди редьюсер
const store = createStore(cartReducer);

export default store;