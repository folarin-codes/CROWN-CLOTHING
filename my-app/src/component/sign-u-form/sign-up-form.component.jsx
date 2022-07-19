import { useState } from "react"

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils" 

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import './sign-up-form.styles.scss'

const SignUpForm = () => {

      const defaultFormFields = {

            displayName: '',
            email: '',
            password: '',
            confirmPassword :''
            
      }

      const [formFields, setFormFields] = useState(defaultFormFields)
      
      const { displayName, email, password, confirmPassword } = formFields

      const clearInputFields = () => {

            setFormFields(defaultFormFields)

      }
      const handleSubmit = async (event) => {

            event.preventDefault()
            
            if (password != confirmPassword) {

                  alert("Passwords doesn't match")

                  return;
                  
            } 

            try {
                  const response = await createAuthUserWithEmailAndPassword(email, password, displayName)

                  console.log(response.user)

                  createUserDocumentFromAuth(response.user, { displayName })

                  clearInputFields()
                  
            }

            catch (error) {

                  if (error.code === 'auth/email-already-in-use') {
                        alert("Can't create account , email is already in use")
                  }
                  else {
                        console.log('User encounted an error', error)
                  }
                
            }      

      }
      
      const onChangeHandler = (event) => {
            
            const { name, value } = event.target;

            setFormFields({...formFields , [name]:value})
      }


      return (
            <div className="signup-container">
                  
                  <h2>Don't have an account?</h2>
                  <span>Sign in with email and password</span>

                  <form onSubmit={handleSubmit}>
                        
                     <FormInput type='text' required  value={displayName} onChange={onChangeHandler} name='displayName'  label='Display name' />

                        <FormInput type='email' required  value={email} onChange={onChangeHandler} name='email' label='Email'/>

                     
                        <FormInput type='password' required value={password} onChange={onChangeHandler} name='password' label='Password'/>

                     
                        <FormInput required type='password' value={confirmPassword} onChange={onChangeHandler} name='confirmPassword' label='Confirm Password'/>
                        
                        <Button  type='submit' buttonType={'inverted'} children='Sign IN' />

                  </form>

            </div>
            
      )
}

export default SignUpForm;