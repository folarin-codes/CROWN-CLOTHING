import { initializeApp } from 'firebase/app'

import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut, onAuthStateChanged } from 'firebase/auth'

import {getFirestore, doc ,getDoc ,setDoc , collection, writeBatch, query, getDocs} from 'firebase/firestore'

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

export const addCollectionAndDocument = async (collectionKey , objectToAdd) => {

      const collectionRef = collection(db, collectionKey)
      
      const batch = writeBatch(db)

      objectToAdd.forEach((object) => {
            const docRef = doc(collectionRef, object.title.toLowerCase())
            batch.set(docRef , object)
      })

      await batch.commit();
      console.log('done')
      
}

export const getCategoriesAndDocument = async () => {
      const collectionRef = collection(db, 'categories')

      const q = query(collectionRef)
      
      const querySnapshot = await getDocs(q)
      
      return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
            

      
}

export const createUserDocumentFromAuth = async ( user, additionalInformation = {} ) => {

      if (!user) return;

      const userDocRef = doc(db, 'users', user.uid)

      const userSnapShot = await getDoc(userDocRef)

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

export const signInAuthUserWithEmailAndPassword = async (email, password, displayName ) => {

      if (!email || !password) return;
      
      return await signInWithEmailAndPassword(auth, email, password, displayName);
}

export const signOutUser = async () => {
      return await signOut(auth)
      
}

export const onAuthStateChangedLister = (callback)=> onAuthStateChanged(auth , callback)