import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/actions';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="container cart-page">
            <h1 className="cart-title">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <Link to="/catalog" className="btn btn-dark">Go to Catalog</Link>
                </div>
            ) : (
                <div className="cart-content">
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-img-wrapper">
                                    <img src={item.imageUrl} alt={item.name} />
                                </div>

                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                </div>

                                <div className="cart-controls">
                                    <button
                                        className="qty-btn"
                                        onClick={() => dispatch(decreaseQuantity(item.id))}
                                    >-</button>
                                    <span className="qty-value">{item.quantity}</span>
                                    <button
                                        className="qty-btn"
                                        onClick={() => dispatch(increaseQuantity(item.id))}
                                    >+</button>
                                </div>

                                <div className="cart-price">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <div className="total-amount">
                            <span>Total amount:</span>
                            <span className="total-price">${totalAmount.toFixed(2)}</span>
                        </div>

                        <div className="cart-buttons">
                            <Link to="/catalog" className="btn btn-outline">Back to Catalog</Link>
                            <Link to="/checkout" className="btn btn-dark">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;