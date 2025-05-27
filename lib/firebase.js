// src/lib/firebase.js

import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUiO_gazpC9CFkYAitfVlkwG1OfRaNOh8",
  authDomain: "roamio-54ec4.firebaseapp.com",
  projectId: "roamio-54ec4",
  storageBucket: "roamio-54ec4.appspot.com", // 🔧 corrected .app → .appspot.com
  messagingSenderId: "769700386287",
  appId: "1:769700386287:web:359fa50d070628e0f9d21a"
  // ❌ omit measurementId and getAnalytics (not supported in Expo Go)
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };


