import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actions';

const initialState = {
    cartItems: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            // Дістаємо product і quantity з payload
            const { product, quantity } = action.payload;
            // Перевіряємо, чи є вже такий товар у кошику (пошук за id)
            const existingItem = state.cartItems.find(item => item.id === product.id);

            if (existingItem) {
                // Якщо товар вже є, ми не дублюємо його, а просто збільшуємо кількість
                // на те число, яке вибрав користувач (quantity)
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    )
                };
            } else {
                // Якщо товару ще немає в кошику, додаємо його як новий об'єкт
                // і встановлюємо початкову кількість (quantity)
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...product, quantity: quantity }]
                };
            }

        case REMOVE_FROM_CART:
            // Видаляємо товар, ID якого збігається з переданим
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            };

        case INCREASE_QUANTITY:
            // Збільшуємо кількість на 1 (кнопка "+" в кошику)
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };

        case DECREASE_QUANTITY:
            // Зменшуємо кількість на 1 (кнопка "-" в кошику)
            // Math.max(1, ...) гарантує, що кількість не стане менше 1
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                        : item
                )
            };

        default:
            return state;
    }
};