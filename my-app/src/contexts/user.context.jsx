import { createContext, useState, useEffect } from 'react'

import { onAuthStateChangedLister , createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'

export const userContext = createContext({
      currentUser: null,
      setCurrentUser : ()=> null

})

export const UserProvider = ({ children }) => {

      const [currentUser, setCurrentUser] = useState(null)
      
      const value = { currentUser, setCurrentUser }

     
      
      useEffect(() => {
            const unsubscribe = onAuthStateChangedLister((user) => {
                  if (user) {
                        createUserDocumentFromAuth(user)
                  }
                  // console.log(user)
                  setCurrentUser(user)
            })

           return unsubscribe
      }, [])
      
      return (
            <userContext.Provider value={value}>
                  {children}
            </userContext.Provider>
      )
}
