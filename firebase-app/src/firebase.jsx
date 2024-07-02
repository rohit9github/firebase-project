// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIx540I42nrz1LFgmU5bkmZXD-hB5ZR2M",
  authDomain: "fir-project-faa78.firebaseapp.com",
  projectId: "fir-project-faa78",
  storageBucket: "fir-project-faa78.appspot.com",
  messagingSenderId: "193036232714",
  appId: "1:193036232714:web:1fc5acf50be5ab4cf717f3",
  measurementId: "G-D40KL74T1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)