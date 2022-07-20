import { useState } from "react"

import { signInWithGooglePopup,  createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

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

                  const response = await signInAuthUserWithEmailAndPassword(email, password)
                  
                  console.log(response)
                  
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

            const response = await signInWithGooglePopup()
            
            console.log(response)
            createUserDocumentFromAuth(response.user)
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
                        
                        
                        <Button onClick={logGoogleUser} type='button'  buttonType={'google'} >Google sign in</Button>

                        </div>


                  </form>

            </div>
            
      )
}

export default SignInForm;