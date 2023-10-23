
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCVMOfdmNt6IeWmoDJdK-zwE37dJ9gkpoA",
  authDomain: "portfolio-jazmine-miller.firebaseapp.com",
  projectId: "portfolio-jazmine-miller",
  storageBucket: "portfolio-jazmine-miller.appspot.com",
  messagingSenderId:"360880565536",
  appId: "1:360880565536:web:3fd5130a66d4b31396bb45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export { firestore }