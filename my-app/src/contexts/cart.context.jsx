import { createContext, useState , useEffect} from "react";

const addCartItem = (cartItems, productsToAdd) => {
      
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === productsToAdd.id)
      
      if (existingCartItem) {
            return cartItems.map((cartItems) => {

                 return  cartItems.id === productsToAdd.id ? { ...cartItems, quantity: cartItems.quantity + 1 } : cartItems
            })
      }

      return [ ...cartItems, {...productsToAdd, quantity : 1 }]

      
}

export const CartContext = createContext({
      isCartOpen: false,
      setIsCartOpen: true,
      cartItems: [],
      addItemToCart: () => { },
      cartCount: 0
})



export const CartProvider = ({ children }) => {
      
      const [isCartOpen, setIsCartOpen] = useState(false)
      
      const [cartItems, setCartItems] = useState([])
      
      const addItemToCart = (productsToAdd) => {

            setCartItems(addCartItem(cartItems , productsToAdd))
            
      }

      useEffect(() => {

            const newCartCount = cartItems.reduce((total, cartItem) => {
                  
                 return total + cartItem.quantity
                  
            }, 0)
            
            setCartCount(newCartCount)
            
      }, [cartItems])

      const [cartCount , setCartCount] = useState(0)
      
      const value = {
            isCartOpen , setIsCartOpen, addItemToCart , cartItems, cartCount
      }
      return (

            <CartContext.Provider value={value}>
                  {children}
            </CartContext.Provider>
      )
}