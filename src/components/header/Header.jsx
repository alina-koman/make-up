import './header.css'

function Header() {
    return (
        <header className="header">
        <div className="container header-box">
            <p className="logo">Dudeshape</p>
            <nav className="nav">
                <ul className="ul">
                    <li className="nav-item">
                        <a href="!#">
                            Home
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="!#">
                            Catalog
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="!#">
                            Cart
                        </a>
                    </li>
                </ul>
            </nav>
            
        </div>
        </header>
    )
}

export default Header;