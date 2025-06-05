import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Navbar() {
  const { email, role } = useUser(); // role = 'user' | 'seller' | 'admin'
  const navigate = useNavigate();

  const isLoggedIn = Boolean(email);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">ReMarket</Link>
      </div>

      <ul className="navbar-center">
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/our-stories">Our stories</Link></li>
        <li><Link to="/super-deals">Super deals</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>

      <div className="navbar-right">
        <Link to="#"><i className="icon">🔍</i></Link>

        {isLoggedIn ? (
          <>
            <Link to="/profile" className="login-link">Profile</Link>
            {(role === 'seller' || role === 'admin') && (
              <Link to="/mylistings"><i className="icon">📦</i></Link>
            )}
            <Link to="/cart"><i className="icon">🛒</i></Link>
          </>
        ) : (
          <button onClick={() => navigate('/login')} className="login-link">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
