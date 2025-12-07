import './footer.css'
// 1. Імпорти картинок видаляємо, бо беремо їх з папки public
// import line from '../../img/footer-line.svg' ...

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-box">
                <div className="footer-top">
                    <h2>Subscribe to Get Our Letest News</h2>
                    <div className="input-box">
                        <input type="text" placeholder="Enter email"/>
                        <button className="hero-btn">Subscribe</button>
                    </div>
                </div>

                {/* 2. Використовуємо прямий шлях до папки public */}
                <img className="line" src="/img/footer-line.svg" alt="line"/>

                <div className="footer-bottom">
                    <nav className="footer-nav">
                        <div className="logo-text">
                            <h3 className="logo">Dudeshape</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        </div>

                        <ul className="footer-ul">
                            <li className="footer-item title-item">Quick Link</li>
                            <li className="footer-item">Home</li>
                            <li className="footer-item">Products</li>
                            <li className="footer-item">About Us</li>
                        </ul>

                        <ul className="footer-ul">
                            <li className="footer-item title-item">Contact Us</li>
                            <li className="footer-item">oyasimnaeem@email.com</li>
                            <li className="footer-item">+123456789</li>
                            <div className="social">
                                {/* 3. href="!#" прибирає попередження */}
                                <a href="!#">
                                    <img src="/img/facebook.svg" alt="facebook"/>
                                </a>
                                <a href="!#">
                                    <img src="/img/twitter.svg" alt="twitter"/>
                                </a>
                                <a href="!#">
                                    <img src="/img/instagram.svg" alt="instagram"/>
                                </a>
                            </div>
                        </ul>
                    </nav>
                </div>

            </div>
        </footer>
    )
}

export default Footer;