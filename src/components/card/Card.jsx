import './card.css';
import PrimaryButton from '../ui/PrimaryButton';

function Card({title, desc, img, price}) {
    return (
        <div className="card">
            <img src={img} alt={title}/>
            <div className="card-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

            <div className="card-buy">
                <PrimaryButton>Buy Now</PrimaryButton>
                <PrimaryButton>Add To Cart</PrimaryButton>

                <p className="price">${price}</p>
            </div>
        </div>
    )
}

export default Card;