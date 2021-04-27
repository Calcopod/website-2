import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDNXMP-wLHFveVeeIOOfbtDgd-ferD7B3E",
  authDomain: "tuica-b9db7.firebaseapp.com",
  projectId: "tuica-b9db7",
  storageBucket: "tuica-b9db7.appspot.com",
  messagingSenderId: "85678999480",
  appId: "1:85678999480:web:f32d3b605189f630f0714d",
  measurementId: "G-0HQEZRSLLD"
};

firebase.initializeApp( config )

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfile = async ( authObject, otherProps ) => {
  // This will fire on sign out as well:
  if ( !authObject ) return

  // Get the user ref and check if it is empty
  const userRef = firestore.doc(`users/${ authObject.uid }`)
  const userSnapshot = await userRef.get()

  if( !userSnapshot.exists ) {
    // Create a new object with all of the info we want:
    const { displayName, email } = authObject
    const createdAt = new Date()

    // Add user to database:
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...otherProps
      })
    } catch ( error ) {
      console.log(" An error occured: " , error )
    }
  }

  return userRef;

}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup( provider )
export default firebase