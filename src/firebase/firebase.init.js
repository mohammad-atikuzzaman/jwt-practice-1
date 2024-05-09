// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3J0j1L1ISMBwcRoSkSRbCxmYzfU0rYLk",
  authDomain: "fir-with-react-840fb.firebaseapp.com",
  projectId: "fir-with-react-840fb",
  storageBucket: "fir-with-react-840fb.appspot.com",
  messagingSenderId: "39200002833",
  appId: "1:39200002833:web:d347ba4e232912cbbef2b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
