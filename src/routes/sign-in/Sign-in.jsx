import React, { Fragment } from 'react'
import { createUserDocumentFromAuth,signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
function SignIn() {
  const loginwithGoogle = async ()=>
  {
    const {user} = await signInWithGooglePopup()
    const userDocRef=await createUserDocumentFromAuth(user)
  
  }
  return (
    <Fragment>

    <div>Sign-in</div>
    <button onClick={loginwithGoogle}>sign In with google popup</button>
    </Fragment>
  )
}

export default SignIn