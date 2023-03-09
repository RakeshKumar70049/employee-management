import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBLXGOV3zCPodaJREnvTDkA0suzdRJ4050",
  authDomain: "position-firebase.firebaseapp.com",
  projectId: "position-firebase",
  storageBucket: "position-firebase.appspot.com",
  messagingSenderId: "576957720756",
  appId: "1:576957720756:web:7d14c799c72a87dc990fe1",
  measurementId: "G-XN3336MY9M"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);