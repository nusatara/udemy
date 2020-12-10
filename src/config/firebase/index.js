import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyA_hZvpmSXpM7mbMHbpKX8zOD24AdYhQuA",
    authDomain: "elearning-music.firebaseapp.com",
    databaseURL: "https://elearning-music.firebaseio.com",
    projectId: "elearning-music",
    storageBucket: "elearning-music.appspot.com",
    messagingSenderId: "567913392652",
    appId: "1:567913392652:web:749e872f8462ec46551c29",
    measurementId: "G-6Y8P8HXN8P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const database = firebase.database(); 
  export default firebase;