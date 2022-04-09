// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZHH3ILGK_N-ZQn_K_OVnQLXSxUEO1fbg",
    authDomain: "simple-auth-integration.firebaseapp.com",
    projectId: "simple-auth-integration",
    storageBucket: "simple-auth-integration.appspot.com",
    messagingSenderId: "840468873058",
    appId: "1:840468873058:web:21481a89b195edc99df63b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;