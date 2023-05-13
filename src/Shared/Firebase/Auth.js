import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArzXg4KRaBxBHQZJAEt6rBbSfAts59jag",
  authDomain: "royale-cafe-aaa3f.firebaseapp.com",
  projectId: "royale-cafe-aaa3f",
  storageBucket: "royale-cafe-aaa3f.appspot.com",
  messagingSenderId: "355263203834",
  appId: "1:355263203834:web:2e01c9eaff29692ad73c43",
  measurementId: "G-H3MXEXZKTY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
