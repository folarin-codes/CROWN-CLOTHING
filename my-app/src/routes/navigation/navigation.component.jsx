import { Outlet, Link } from "react-router-dom";
import { useContext } from 'react'

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { userContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as LOGO } from '../../assests/crown.svg'
import './navigation.style.scss'

const Navigation = () => {

    

      const {  currentUser } = useContext(userContext)
      
      const {isCartOpen} = useContext(CartContext)

     

      return (
        <>
                  <div className="navigation">
                        <Link to='/'>
                             <LOGO/>
                        </Link>

                        <div className="nav-links-container">
                              
                              <Link className="nav-link" to='/shop'>
                                    SHOP

                              </Link>

                              {
                                    currentUser ? (
                                          <span onClick={signOutUser} className="nav-link">SIGN OUT</span>
                                    ) : (
                                          <Link className="nav-link" to='/auth'> SIGN IN </Link>         
                                                
                                    )
                              }

                              <CartIcon/>

                            
                              
                              

                        </div>

                      
                        
                  </div>
                  {isCartOpen && <CartDropdown />}
                  <Outlet/>
       
        </>
       
      )
}
    
export default Navigation