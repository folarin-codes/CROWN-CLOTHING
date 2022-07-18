import React from 'react'
import { signInWithGooglePopup , createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


function SignIn() {

  const logGoogleUser = async () => {

    const response = await signInWithGooglePopup()
    console.log(response)
    createUserDocumentFromAuth(response.user)
  }

  return (
    <>
      <h1>Sign in</h1>

      <button onClick={()=> logGoogleUser()}>sign in with google</button>
    </>
  )
}


export default SignIn