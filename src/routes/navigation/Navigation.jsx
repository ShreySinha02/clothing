import { Fragment } from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";
import './navigation.styles.scss'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
function Navigation() {

  const {currentUser }= useContext(UserContext)
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <CrwnLogo className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>

        {
          currentUser ? (<span onClick={signOutUser} className="nav-link">Sign Out</span>):( <Link className='nav-link' to='/auth'>
          SIGN IN
        </Link>)
        }
        <CartIcon/>
       
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
    <Outlet />
  </Fragment>
  );
}

export default Navigation;
