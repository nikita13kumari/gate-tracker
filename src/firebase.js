// File: src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAjrzxadpOQor_xAfU0AOgeDa_jekxXYGg',
  authDomain: 'gate-tracker-f70fb.firebaseapp.com',
  projectId: 'gate-tracker-f70fb',
  storageBucket: 'gate-tracker-f70fb.appspot.com',
  messagingSenderId: '1085114153399',
  appId: 'your-app-id-goes-here' // Replace with your Firebase App ID from settings
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
