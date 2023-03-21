import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Crwnlogo} from "../../assets/crown.svg"
import './navigation.styles.scss'
function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Crwnlogo/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/shop">Shop</Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/signin">SignIn</Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
}

export default Navigation;
