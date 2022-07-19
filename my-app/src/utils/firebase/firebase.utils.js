import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect , createUserWithEmailAndPassword } from 'firebase/auth'
import {getFirestore, doc ,getDoc ,setDoc} from 'firebase/firestore'

const firebaseConfig = {
      apiKey: "AIzaSyDiz6ZJemz05CoaWnn2cbAlGuYVLEJkdLk",
      authDomain: "crown-clothing-18fa9.firebaseapp.com",
      projectId: "crown-clothing-18fa9",
      storageBucket: "crown-clothing-18fa9.appspot.com",
      messagingSenderId: "152707919257",
      appId: "1:152707919257:web:2719af645af62ae65a3708"
};
    
const app = initializeApp(firebaseConfig)


const Provider = new GoogleAuthProvider()


Provider.getCustomParameters({
      prompt :'select_account'
})

const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, Provider)
export const signInWithGoogleRedirect = () => signInWithGoogleRedirect(auth , Provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async ( user, additionalInformation = {} ) => {

      if (!user) return;

      const userDocRef = doc(db, 'users', user.uid)
      
   

      const userSnapShot = await getDoc(userDocRef)

      // console.log(userSnapShot)

      // console.log(userSnapShot.exists())

      if (!userSnapShot.exists()) {
            const { displayName, email } = user;
            const createdAt = new Date();

            try {
                  await setDoc(userDocRef, {
                        displayName, email, createdAt,
                        ...additionalInformation
                  })
                  
            }
            catch (error) {
                  console.log(`There was an error ${error}`)
            }
      }

      return userDocRef;     
}

export const createAuthUserWithEmailAndPassword = async (email, password, displayName ) => {

      if (!email || !password) return;
      
      return await createUserWithEmailAndPassword(auth, email, password, displayName);
}