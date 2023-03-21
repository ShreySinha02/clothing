import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect
,signInWithPopup,GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth'


import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD9tB35JnsXq3LNN0G3HMpfYSvPXLCiQPs",
    authDomain: "clothing-brand-a341d.firebaseapp.com",
    projectId: "clothing-brand-a341d",
    storageBucket: "clothing-brand-a341d.appspot.com",
    messagingSenderId: "966767580706",
    appId: "1:966767580706:web:9bca5cb92a4f253ded5c7b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt:"select_account"
  })


  export const auth = getAuth()
  export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)


  export const db=getFirestore() 

  export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc (db,'users',userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists())
    {
      const {displayName,email}=userAuth
      const createdat = new Date()
      try{
        await setDoc(userDocRef,{displayName,email,createdat})
      }catch(error)
      {
        console.log(error)
      }
    }
    return userDocRef
  }