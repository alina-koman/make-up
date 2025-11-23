import { Link } from 'react-router-dom'; // 1. Імпортуємо Link
import './card.css';

// 2. Обов'язково додаємо 'id' у список props
function Card({ id, title, desc, img, price }) {
    return (
        <div className="card">
            <img src={img} alt={title}/>
            <div className="card-desc">
                <h3>
                    <Link to={`/product/${id}`}>{title}</Link>
                </h3>
                <p>{desc}</p>
            </div>

            <div className="card-buy">
                <Link to={`/product/${id}`}>
                    <button className="hero-btn">View More</button>
                </Link>

                <p className="price">${price}</p>
            </div>
        </div>
    )
}

export default Card;