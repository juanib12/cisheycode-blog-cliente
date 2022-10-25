const Header = () => {
  return (
    <header className="header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">
            <i class="bx bxs-cheese"></i>
            CisheyCode
          </a>
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
