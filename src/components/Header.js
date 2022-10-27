import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav bd-grid">
        <div>
          <Link to="/">
          <a href="#" className="nav__logo">
            <i class="bx bxs-cheese"></i>
            CisheyCode
          </a>
          </Link>
        </div>
        <div className="container-search">
          <input placeholder="Buscar" className="search" />
          <div className="icon-search">
            <i class="bx bx-search icon"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
