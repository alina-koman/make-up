import './header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="container header-box">
                <p className="logo">Dudeshape</p>
                <nav className="nav">
                    <ul className="ul">
                        <li className="nav-item">
                            <Link to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/catalog">
                                Catalog
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/cart">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header;