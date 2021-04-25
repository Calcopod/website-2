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

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup( provider )
export default firebase