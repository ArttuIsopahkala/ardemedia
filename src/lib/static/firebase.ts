import { initializeApp, getApps, getApp } from "firebase/app"
/* import { getAnalytics } from 'firebase/analytics'; */
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { getFunctions, connectFunctionsEmulator } from "firebase/functions"
import config from '$lib/static/firebaseConfig.js';

// Initialize Firebase
const app = (getApps().length === 0 ? initializeApp(config) : getApp())

// Analytics for future
/* const analytics = getAnalytics(app); */
const db = getFirestore(app);
const functions = getFunctions(app, "europe-central2");

if (import.meta.env.MODE === 'development') {
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectFunctionsEmulator(functions, 'localhost', 5001)
}

export { app, db, functions }