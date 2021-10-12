// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBRoYyd_dpPnNxhf3K2x6wE6-i6wIKXLdA',
  authDomain: 'poke-430d1.firebaseapp.com',
  projectId: 'poke-430d1',
  storageBucket: 'poke-430d1.appspot.com',
  messagingSenderId: '220401363252',
  appId: '1:220401363252:web:41f484941ba0d01577dd61',
  measurementId: 'G-YM2YNE35T5'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const projectAuth = getAuth()
const projectFirestore = getFirestore()

// const timestamp = app.firestore.FieldValue.serverTimestamp() || null

export { projectAuth, projectFirestore, createUserWithEmailAndPassword, getAuth, updateProfile }
