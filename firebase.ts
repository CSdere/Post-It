import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCSAcGFiT9poQoDD93ENnT6hW4lxvr1BRU",
    authDomain: "post-it-4c2ce.firebaseapp.com",
    projectId: "post-it-4c2ce",
    storageBucket: "post-it-4c2ce.appspot.com",
    messagingSenderId: "240065483290",
    appId: "1:240065483290:web:7bc7dd870a53b3f0c5b7a3"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage };
