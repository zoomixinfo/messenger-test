import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8URE6Kgh_qglTiNHUbEjJSrJA2cwtueI",
    authDomain: "messager-d8219.firebaseapp.com",
    projectId: "messager-d8219",
    storageBucket: "messager-d8219.appspot.com",
    messagingSenderId: "933169693110",
    appId: "1:933169693110:web:5427726b4bf334bd5bc117",
    measurementId: "G-R67Z8BLCWX"
})

const db = firebaseApp.firestore()
export default db