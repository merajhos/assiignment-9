
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1HtZRuF7goYPhE7OUjW8QeAHs19IEF2Y",
  authDomain: "greennest-6d2e6.firebaseapp.com",
  projectId: "greennest-6d2e6",
  storageBucket: "greennest-6d2e6.firebasestorage.app",
  messagingSenderId: "1000164886769",
  appId: "1:1000164886769:web:f9c5c0ad719bc46ad88150",
  measurementId: "G-D0T9BP04F0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;