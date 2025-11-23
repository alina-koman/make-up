import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import './ProductPage.css';

function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { items } = useProducts();

    // Стан для кількості та вибраного розміру
    const [quantity, setQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState("S");

    const product = items.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="container" style={{marginTop: '50px'}}>Product not found</div>;
    }

    // Функції для зміни кількості
    const decreaseQty = () => setQuantity(prev => Math.max(1, prev - 1));
    const increaseQty = () => setQuantity(prev => prev + 1);

    return (
        <div className="container product-page-container">
            <div className="product-image-wrapper">
                <img src={product.imageUrl} alt={product.name} />
            </div>

            <div className="product-info-wrapper">

                <div className="product-tags">
                    <span className="tag tag-dark">Category: {product.category}</span>
                    <span className="tag tag-teal">New Arrival</span>
                </div>

                <h1 className="product-title">{product.name}</h1>

                <p className="product-description">
                    {product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc maximus, nulla ut commodo sagittis.
                </p>

                <div className="product-controls">

                    <div className="control-group">
                        <label>Size:</label>
                        <div className="size-selector">
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size}
                                    className={`size-btn ${selectedOption === size ? 'active' : ''}`}
                                    onClick={() => setSelectedOption(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="control-group">
                        <label>Quantity:</label>
                        <div className="quantity-counter">
                            <button className="qty-btn" onClick={decreaseQty}>-</button>
                            <span className="qty-value">{quantity}</span>
                            <button className="qty-btn" onClick={increaseQty}>+</button>
                        </div>
                    </div>

                </div>

                <div className="product-bottom-actions">
                    <div className="product-price">
                        Price: ${product.price}
                    </div>

                    <div className="action-buttons">
                        <button className="btn btn-outline" onClick={() => navigate(-1)}>
                            Go back
                        </button>
                        <button className="btn btn-dark">
                            Add to cart
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductPage;