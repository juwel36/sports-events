// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAie09sPzQH5CCKkFqrFrp1cbiLBrr24zk",
  authDomain: "sports-event-managment36.firebaseapp.com",
  projectId: "sports-event-managment36",
  storageBucket: "sports-event-managment36.appspot.com",
  messagingSenderId: "1026717794256",
  appId: "1:1026717794256:web:67b65cafa5009bb00cc3d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth