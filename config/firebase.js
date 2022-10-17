import firebase from "firebase/app";
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCEmA87tC6gGlk_N12nhf4FUsBB13JJp6U",
  authDomain: "my-app-92518.firebaseapp.com",
  projectId: "my-app-92518",
  storageBucket: "my-app-92518.appspot.com",
  messagingSenderId: "553937535807",
  appId: "1:553937535807:web:a1519d60bd3bfefc25c98a",
  measurementId: "G-PZ4TLBEZTN",
};

let app;

if (firebase.apps.length === 0) {
  const firebase = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { firebase };
