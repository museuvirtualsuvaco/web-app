import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

class Firebase {
  constructor() {
    try{
      const app = initializeApp(firebaseConfig);
      this.firestore = getFirestore(app)
      console.log("Firebase initialized successfully")
      
    } catch (error){
        console.error("Firebase initialization error:", error);
    }
  }


  dummy() {
    console.log("Called dummy function.")
  }
}

export default Firebase;