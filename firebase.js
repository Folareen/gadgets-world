import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ7a2ZtvqvhnlBwRXxxiiOd-1HgYZncL4",
  authDomain: "gadgets-world-34235.firebaseapp.com",
  projectId: "gadgets-world-34235",
  storageBucket: "gadgets-world-34235.appspot.com",
  messagingSenderId: "404727282051",
  appId: "1:404727282051:web:a0f290c7a6f7ebb1a1deb6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
