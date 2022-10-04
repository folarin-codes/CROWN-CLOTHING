import { createContext, useState, useEffect , useReducer } from 'react'



export const userContext = createContext({
      currentUser: null,
      setCurrentUser : ()=> null

})

// export const USER_ACTION_TYPES = {
//       SET_CURRENT_USER : 'SET_CURRENT_USER'
// }

const userReducer = (state, action) => {
      const { type, payload } = action;
      console.log('dispatched')

      console.log(state)

      switch (type) {
            case USER_ACTION_TYPES.SET_CURRENT_USER:
                  return {
                        ...state,
                        currentUser : payload
                  }
            
            default:
                  throw new Error(`Unhandled type ${type}`)
      }
}

const INITIAL_STATE = {
      currentUser : null
}


export const UserProvider = ({ children }) => {

      const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
      
      const { currentUser } = state;
      
      const setCurrentUser = (user) => {
            dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
            
      }

      // const [currentUser, setCurrentUser] = useState(null)
      
      const value = { currentUser, setCurrentUser }




     
      
    
      
      return (
            <userContext.Provider value={value}>
                  {children}
            </userContext.Provider>
      )
}
