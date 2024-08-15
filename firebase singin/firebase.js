import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {getDoc, updateDoc,doc, deleteDoc,where,getDocs, getFirestore, query, collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDE90Adf9IvXy3pIqQHd0D-e-PuR769sI4",
  authDomain: "todo-list-ecfb5.firebaseapp.com",
  databaseURL: "https://todo-list-ecfb5.firebaseio.com",
  projectId: "todo-list-ecfb5",
  storageBucket: "todo-list-ecfb5.appspot.com",
  messagingSenderId: "744055843341",
  appId: "1:744055843341:web:b074caae98caba94b74344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
export {getDoc,doc, updateDoc, deleteDoc,db ,where, getDocs,query, collection, addDoc,sendPasswordResetEmail,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut }