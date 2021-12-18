import "./Navbar.css";
import {Link} from 'react-router-dom';


const Navbar = ({click, user,}) => {
  return (
    <nav className="navbar">
      <div className="hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
      </div>
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
      {(user == "") ? (
      <div className="navbar-right">
        <Link to="/LoginPage">Login</Link>
      </div>
      ) : (
        <div className="navbar-right">
        <a className = "notification-btn" href = "#">
          <i className="fa fa-bell"></i>
        </a>
        &nbsp; &nbsp;
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          &nbsp;
          {user}
      </div>
      )}
    </nav>
  );
};

export default Navbar;