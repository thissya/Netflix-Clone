// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr56StE-SxgWfAMXblHRsd0ygGN-HHkPg",
  authDomain: "netflix-a-tk-story.firebaseapp.com",
  projectId: "netflix-a-tk-story",
  storageBucket: "netflix-a-tk-story.firebasestorage.app",
  messagingSenderId: "970473267884",
  appId: "1:970473267884:web:57e59d5d028579d91b7509"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth=getAuth(app);