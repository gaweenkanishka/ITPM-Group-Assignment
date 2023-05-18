// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkdVT0YK5fH_WUdQ06AKnwtiluipl8J3U",
  authDomain: "itpm-01.firebaseapp.com",
  projectId: "itpm-01",
  storageBucket: "itpm-01.appspot.com",
  messagingSenderId: "406979170985",
  appId: "1:406979170985:web:d0dc6860f8a82cafb74fb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
