import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

// import { CartContext } from "../../contexts/cart.context";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as LOGO } from '../../assests/crown.svg'

import { NavigationContainer, NavLinksContainer, LogoContainer, NavLink } from './navigation.style.jsx'


import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {

      const currentUser = useSelector(selectCurrentUser)
      const isCartOpen = useSelector(selectIsCartOpen)

    //  const {  currentUser } = useContext(userContext)
      
      // const {isCartOpen} = useContext(CartContext)

     

      return (
        <>
                  <NavigationContainer>
                        <LogoContainer to='/'>
                             <LOGO/>
                        </LogoContainer>

                        <NavLinksContainer >
                              
                              <NavLink className="nav-link" to='/shop'>
                                    SHOP

                              </NavLink>

                              {
                                    currentUser ? (
                                          <NavLink as={'span'} onClick={signOutUser} className="nav-link">SIGN OUT</NavLink>
                                    ) : (
                                          <NavLink className="nav-link" to='/auth'> SIGN IN </NavLink>         
                                                
                                    )
                              }

                              <CartIcon/>
  

                        </NavLinksContainer>
                              
                  </NavigationContainer>
                  {isCartOpen && <CartDropdown />}
                  <Outlet/>
       
        </>
       
      )
}
    
export default Navigation