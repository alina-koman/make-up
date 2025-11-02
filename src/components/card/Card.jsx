import './card.css'


function Card({title, desc, img}) {
    return (
        <div className="card">
            <img src={img} alt="img"/>
            <div className="card-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

            <div className="card-buy">
                <button className="hero-btn">Buy Now</button>
                <button className="hero-btn card-btn-two">Add To Cart</button>
                <p className="price">$120</p>
            </div>
        </div>
    )
}

export default Card;