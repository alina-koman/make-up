import './footer.css'
import line from './../../img/footer-line.svg'
import facebook from './../../img/facebook.svg'
import twitter from './../../img/twitter.svg'
import instagram from './../../img/instagram.svg'

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

                <img className="line" src={line} alt="line"/>

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
                                <a href="#">
                                    <img src={facebook} alt="facebook"/>
                                </a>
                                <a href="#">
                                    <img src={twitter} alt="twitter"/>
                                </a>
                                <a href="#">
                                    <img src={instagram} alt="instagram"/>
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