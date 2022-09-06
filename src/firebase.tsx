import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: `${VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: `${VITE_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
