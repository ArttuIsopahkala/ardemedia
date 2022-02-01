import { initializeApp, getApps, getApp } from "firebase/app"
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"
import config from '$lib/static/firebaseConfig.js';

// Initialize Firebase
const app = (getApps().length === 0 ? initializeApp(config) : getApp())

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const analytics = getAnalytics(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { app, db, functions, analytics }