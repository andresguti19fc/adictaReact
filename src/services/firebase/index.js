// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzCfSKFKDIvft7cOxLVgZZoFOSjzWwIRw",
  authDomain: "adicta-react.firebaseapp.com",
  projectId: "adicta-react",
  storageBucket: "adicta-react.appspot.com",
  messagingSenderId: "655642992268",
  appId: "1:655642992268:web:d2ee2411da885dbdcde5a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const db = getFirestore(app);