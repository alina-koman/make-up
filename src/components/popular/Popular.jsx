import { useState } from 'react';
import { useProducts } from '../../context/ProductsContext'; // Беремо товари з контексту
import Card from './../card/Card';
import './popular.css';

function Popular() {
    const { items } = useProducts();
    const [visible, setVisible] = useState(2);

    const showMore = () => {
        setVisible((prev) => prev + 3);
    };

    return (
        <section className="popular">
            <div className="container popular-box">
                <div className="popular-desc">
                    <h2>Our Popular Product</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className="cards-box">
                    {items.slice(0, visible).map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            img={product.imageUrl}
                            title={product.name}
                            desc={product.description}
                            price={product.price}
                        />
                    ))}
                </div>

                {visible < items.length && (
                    <button className="more" onClick={showMore}>
                        More
                    </button>
                )}
            </div>
        </section>
    )
}

export default Popular;