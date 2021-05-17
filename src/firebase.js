import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyClz7pVwETaNYggt50-ddPmOc12U7_K_t0",
  authDomain: "twitter-clone-946a6.firebaseapp.com",
  projectId: "twitter-clone-946a6",
  storageBucket: "twitter-clone-946a6.appspot.com",
  messagingSenderId: "1066654684393",
  appId: "1:1066654684393:web:054c8aead8cb84173fcc78",
  measurementId: "G-K6QFSWLVD9",
});

const db = firebaseApp.firestore();

export default db;
