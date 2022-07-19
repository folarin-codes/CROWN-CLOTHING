import SignUpForm from '../../component/sign-u-form/sign-up-form.component'
import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'



function SignIn() {

  const logGoogleUser = async () => {

    const response = await signInWithGooglePopup()
    
    console.log(response)
    createUserDocumentFromAuth(response.user)
  }

  return (
    <>
      <h1>Sign in</h1>

      <button onClick={() => logGoogleUser()}>sign in with google popup</button>
      <SignUpForm/>
      
    </>
  )
}


export default SignIn