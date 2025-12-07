import './header.css';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();             // Очищаємо дані користувача (localStorage + state)
        // Переходимо на сторінку входу.
        // replace: true замінює поточний запис в історії, щоб "Назад" не повертало в профіль
        navigate('/login', { replace: true });
    };

    return (
        <header className="header">
            <div className="container header-box">
                <p className="logo">Dudeshape</p>
                <nav className="nav">
                    <ul className="ul">
                        {/* Умовний рендеринг: */}

                        {!user ? (
                            // Якщо користувач НЕ увійшов -> Показуємо тільки Login
                            <li className="nav-item">
                                <Link to="/login">Login</Link>
                            </li>
                        ) : (
                            // Якщо користувач УВІЙШОВ -> Показуємо меню і Logout
                            <>
                                <li className="nav-item"><Link to="/">Home</Link></li>
                                <li className="nav-item"><Link to="/catalog">Catalog</Link></li>
                                <li className="nav-item"><Link to="/cart">Cart</Link></li>
                                <li className="nav-item">
                                    <button
                                        onClick={handleLogout}
                                        style={{
                                            background: 'transparent',
                                            border: '1px solid #333',
                                            padding: '5px 15px',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontFamily: 'inherit'
                                        }}
                                    >
                                        Logout ({user})
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;