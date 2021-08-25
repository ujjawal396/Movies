import firebase from "firebase/app";

import "firebase/auth";

import "firebase/firestore";//firestore is a database which is used in firebase

const firebaseConfig = {
    apiKey: "AIzaSyDag4giDmkmw_egyhdVSZtPWhaGpc8pofU",
    authDomain: "reels-8a7ba.firebaseapp.com",
    projectId: "reels-8a7ba",
    storageBucket: "reels-8a7ba.appspot.com",
    messagingSenderId: "634154275177",
    appId: "1:634154275177:web:5e13377b59231ef1916df8"
  };



  firebase.initializeApp(firebaseConfig); //connecting react app to firebase 

  export default firebase;