import {Link} from 'react-router-dom'
import '../css/Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-flex">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <button onClick={() => {
              localStorage.removeItem('userName');
              window.location.reload();
            }}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
