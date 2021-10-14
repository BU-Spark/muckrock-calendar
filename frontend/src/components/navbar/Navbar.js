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
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="navbar-right">
        <a className = "notification-btn" href = "/Notifications">
          <i className="fa fa-bell"></i>
        </a>
        &nbsp; &nbsp;
        <a href="/Profile">
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          &nbsp;
          Active User
        </a>
      </div>
    </nav>
  );
};

export default Navbar;