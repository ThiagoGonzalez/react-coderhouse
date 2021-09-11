import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    
    apiKey: "AIzaSyDsB2LYxa9ycP3-i0xm0nB9ejVIRXPRs6o",
    authDomain: "react-coderhouse-e5024.firebaseapp.com",
    projectId: "react-coderhouse-e5024",
    storageBucket: "react-coderhouse-e5024.appspot.com",
    messagingSenderId: "946186046758",
    appId: "1:946186046758:web:16c08a730b1a68a5de45e7"
}

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app)
}