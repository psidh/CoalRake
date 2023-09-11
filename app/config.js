// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from "firebase/auth";
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCqeb_xEznXa-3jLUOAeUlJHfsGmGL0IX0',
  authDomain: 'coal-raker.firebaseapp.com',
  projectId: 'coal-raker',
  storageBucket: 'coal-raker.appspot.com',
  messagingSenderId: '893465303782',
  appId: '1:893465303782:web:3226d32ffbba72cb41b927',
  measurementId: 'G-RDDXSX6X62',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
