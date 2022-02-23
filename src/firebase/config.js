import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCsvbT9Puj_VvkzWOolnilfbQt5xWkufg8",
  authDomain: "react-firebase-9-todo.firebaseapp.com",
  databaseURL: "https://react-firebase-9-todo-default-rtdb.firebaseio.com",
  projectId: "react-firebase-9-todo",
  storageBucket: "react-firebase-9-todo.appspot.com",
  messagingSenderId: "980862098508",
  appId: "1:980862098508:web:967dfdde2bc3cb227528e9"
};

//init firebase app
const app = initializeApp(firebaseConfig)

//init firestore db
const db = getFirestore(app)

//init firebase authentication
const auth = getAuth(app)

export { db, auth }
