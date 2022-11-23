import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-bar">
    <header>
      Currency Pro
    </header>
    <div className="nav-link">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/display">Display</Link>
    </div>
  </nav>
);

export default Navbar;
