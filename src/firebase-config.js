

import { getFirestore } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA1lEfEevuCUip9kVS-SJ1KcluLTLYxgYU",
  authDomain: "haswit-main.firebaseapp.com",
  projectId: "haswit-main",
  storageBucket: "haswit-main.appspot.com",
  messagingSenderId: "415690869384",
  appId: "1:415690869384:web:2e6f7959d920a1f302ed3d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);
export default storage;