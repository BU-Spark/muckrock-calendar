import "./Navbar.css";


const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <form action="/" method="get">
        <input
          className="search_input"
          type="text"
          id="header-search"
          placeholder="Search"
          name="s"
        />
        <button className="search_button" type="submit">
          Search
        </button>
      </form>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
