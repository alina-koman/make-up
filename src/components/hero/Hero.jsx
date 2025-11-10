import './hero.css'
import heroImg from '../../img/hero.svg';

function Hero() {
    return (
        <section className="hero">
            <div className="container hero-box">
                <div className="box-title">
                    <h1 className="hero-title">
                        Get Your Best Cosmetic Products Here
                    </h1>
                    <p className="hero-desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    </p>
                    <button className="hero-btn">Shop Now</button>
                </div>

                <img src={heroImg} alt="hero"/>

            </div>
        </section>
    )
}

export default Hero;