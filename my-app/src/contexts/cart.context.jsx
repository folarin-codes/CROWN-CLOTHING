      import { createContext, useState , useEffect} from "react";

const addCartItem = (cartItems, productToAdd) => {
      
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
      
      if (existingCartItem) {
           return cartItems.map((cartItem) => {

                 return  cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            })
      }

      return [...cartItems ,{ ...productToAdd , quantity : 1}]

      
}

const removeCartItem =  (cartItems, cartItemToRemove) => {
      
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)
      
      if (existingCartItem.quantity === 1) {
            return cartItems.filter((cartItems) => cartItems.id !== cartItemToRemove.id )
      }

      return cartItems.map((cartItems) => {

            return  cartItems.id === cartItemToRemove.id ? { ...cartItems, quantity: cartItems.quantity - 1 } : cartItems
       })

      
}

const clearCartItem = (cartItems, cartItemToClear) => {

      return cartItems.filter((cartItems) => cartItems.id !== cartItemToClear.id )
      
}

export const CartContext = createContext({
      isCartOpen: false,
      setIsCartOpen: true,
      cartItems: [],
      addItemToCart: () => { },
      removeItemFromCart: () => { },
      clearItemFromCart: () => {},
      cartCount: 0,
      cartTotal : 0
      
})



export const CartProvider = ({ children }) => {
      
      const [isCartOpen, setIsCartOpen] = useState(false)
      
      const [cartItems, setCartItems] = useState([])

      const [cartCount, setCartCount] = useState(0)
      
      const [cartTotal , setCartTotal] = useState(0)
      
      const addItemToCart = (productsToAdd) => {

            setCartItems(addCartItem(cartItems , productsToAdd))
           
      }

      const removeItemFromCart = (cartItemToRemove) => {

            setCartItems(removeCartItem(cartItems , cartItemToRemove))
            
      }

      const clearItemFromCart = (cartItemToRemove) => {

            setCartItems(clearCartItem(cartItems , cartItemToRemove))
            
      }

      useEffect(() => {

            const newCartCount = cartItems.reduce((total, cartItem) => {
                  
                 return total + cartItem.quantity
                  
            }, 0)
            
            setCartCount(newCartCount)
            
      }, [cartItems])

      useEffect(() => {

            const newCartTotal = cartItems.reduce((total, cartItem) => {
                  
                 return total + cartItem.quantity * cartItem.price
                  
            }, 0)
            
            setCartTotal(newCartTotal)
            
      }, [cartItems])

      
      const value = {
            isCartOpen , setIsCartOpen, addItemToCart , cartItems, cartCount, removeItemFromCart , clearItemFromCart , cartTotal
      }
      return (

            <CartContext.Provider value={value}>
                  {children}
            </CartContext.Provider>
      )
}