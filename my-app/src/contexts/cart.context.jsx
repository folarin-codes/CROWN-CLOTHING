import { createContext, useState , useEffect, useReducer} from "react";

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


const INITIAL_STATE = {
      isCartOpen: false,
      cartItems: [],
      cartCount: 0,
      cartTotal: 0,

}

const CART_ACTION_TYPES = {

      SET_CART_ITEMS: 'SET_CART_ITEMS',
      SET_CART_OPEN :"SET_CART_OPEN"
}
 
export const cartReducer = (state, action) => {

      const { type, payload } = action
      
      switch (type) {
            case CART_ACTION_TYPES.SET_CART_ITEMS: return {
                  ...state,
                  ...payload
                   
            };

            case CART_ACTION_TYPES.SET_CART_OPEN:
                  return {
                        ...state,
                        isCartOpen:payload
                  }
            
            default:
                  throw new Error(`unhandled type ${type} from cartReducer`)     
      }
}

export const CartProvider = ({ children }) => {
      
      // const [isCartOpen, setIsCartOpen] = useState(false)
      

      const [{ cartCount, cartItems, cartTotal , isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE)

      
      const addItemToCart = (productsToAdd) => {

            const newCartItems = addCartItem(cartItems, productsToAdd)

            updateCartItemReducer(newCartItems)
            
      }

      const removeItemFromCart = (cartItemToRemove) => {

            
            const newCartItems = removeCartItem(cartItems, cartItemToRemove)
            
            updateCartItemReducer(newCartItems)
      }

      const clearItemFromCart = (cartItemToRemove) => {


            const newCartItems = clearCartItem(cartItems, cartItemToRemove)
            updateCartItemReducer(newCartItems)
            
      }


      const updateCartItemReducer = (newCartItems) => {

            const newCartCount = newCartItems?.reduce((total, cartItem) => {
                  
                  return total + cartItem.quantity
                   

            }, 0)
            
            const newCartTotal = newCartItems?.reduce((total, cartItem) => {
                  
                  return total + cartItem.quantity * cartItem.price
                   
             }, 0)
             
            dispatch({type:CART_ACTION_TYPES.SET_CART_ITEMS, payload:{cartItems : newCartItems, cartTotal:newCartTotal, cartCount:newCartCount}})
            
      }

      const setIsCartOpen = (bool) => {
            dispatch({type:CART_ACTION_TYPES.SET_CART_OPEN, payload:bool})
            
      }

      const value = {
            isCartOpen , setIsCartOpen, addItemToCart , cartItems, cartCount, removeItemFromCart , clearItemFromCart , cartTotal
      }
      return (

            <CartContext.Provider value={value}>
                  {children}
            </CartContext.Provider>
      )
}