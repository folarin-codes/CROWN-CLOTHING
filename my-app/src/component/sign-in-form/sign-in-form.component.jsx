import { useState} from "react"

import FormInput from "../form-input/form-input.component";
import Button , {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { signInWithGooglePopup,  createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss'

const SignInForm = () => {

      const defaultFormFields = {
            email: '',
            password: '',

      }
      
    

      const [formFields, setFormFields] = useState(defaultFormFields)
      
      const { email, password } = formFields

      const clearInputFields = () => {

            setFormFields(defaultFormFields)

      }
      const handleSubmit = async (event) => {

            event.preventDefault()
            
           
            try {
                 
                  clearInputFields()

                  const {user} = await signInAuthUserWithEmailAndPassword(email, password)
                  
                
                  
            }

            catch (error) {

                  switch (error.code) {
                        case 'auth/wrong-password':
                              alert('incorrect password')
                              break;
                        case 'auth/user-not-found':
                              alert("Account doesn't exist")
                              break;
                        default:
                              console.log(error)

                  }

              
            }      

      }
      
      const onChangeHandler = (event) => {
            
            const { name, value } = event.target;

            setFormFields({...formFields , [name]:value})
      }

      const logGoogleUser = async () => {

            await signInWithGooglePopup()
            
           
          
          }


      return (
            <div className="signup-container">
                  
                  <h2>Already have an account?</h2>
                  <span>Sign in with email and password</span>

                  <form onSubmit={handleSubmit}>
                        
       
                        <FormInput type='email' required  value={email} onChange={onChangeHandler} name='email' label='Email'/>

                     
                        <FormInput type='password' required value={password} onChange={onChangeHandler} name='password' label='Password' />
                        
                        <div className="buttons-container">
                              
                        
                        <Button type='submit' buttonType={''} >SIGN IN</Button>
                        
                        
                              <Button onClick={logGoogleUser} type='button' buttonType={BUTTON_TYPE_CLASSES.google} >Google sign in</Button>

                        </div>


                  </form>

            </div>
            
      )
}

export default SignInForm;