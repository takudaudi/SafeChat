import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAotj06PAj4kavQRRIDY8Si_w3Bqq7j6cM",
    authDomain: "chat-tscz.firebaseapp.com",
    projectId: "chat-tscz",
    storageBucket: "chat-tscz.appspot.com",
    messagingSenderId: "878042597295",
    appId: "1:878042597295:web:269bb700faea4a2a0d915a",
    measurementId: "G-ZV55RDYT9Q"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };