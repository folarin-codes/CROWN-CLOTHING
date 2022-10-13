import { CART_ACTION_TYPES } from "./cart.types";

import { createAction } from '../../utils/reducer/reducer.utils'


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

  
export const addItemToCart = (cartItems, productsToAdd) => {

      const newCartItems = addCartItem(cartItems, productsToAdd)

    return   createAction(CART_ACTION_TYPES.SET_CART_ITEMS , newCartItems)
      
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

      
      const newCartItems = removeCartItem(cartItems, cartItemToRemove)
      
    return   createAction(CART_ACTION_TYPES.SET_CART_ITEMS , newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToRemove) => {


      const newCartItems = clearCartItem(cartItems, cartItemToRemove)
   
      return   createAction(CART_ACTION_TYPES.SET_CART_ITEMS , newCartItems)
      
}

export const setIsCartOpen = (boolean)=>createAction(CART_ACTION_TYPES.SET_CART_OPEN , boolean)