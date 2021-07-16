import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <form action="/" method="get">
        <input
          className="search_input"
          type="text"
          id="header-search"
          placeholder="Search ..."
          name="s"
        />
        <button className="search-btn" type="submit">
          <i class = "fa fa-search"></i>
        </button>
      </form>
      <div className="navbar-right">
        <a href="#">
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
