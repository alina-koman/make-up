import './popular.css'
import Card from './../card/Card';

import img1 from './../../img/product1.svg'
import img2 from './../../img/product2.svg'

function Popular() {
    return (
        <section className="popular">
            <div className="container popular-box">
                <div className="popular-desc">
                    <h2>Our Popular Product</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                </div>

                <div className="cards-box">
                    <Card className="card-buy" img={img1} title="Cosmetic products" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"></Card>
                    <Card className="card-buy" img={img2} title="Cosmetic products" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"></Card>
                </div>
            </div>
        </section>
    )
}

export default Popular;