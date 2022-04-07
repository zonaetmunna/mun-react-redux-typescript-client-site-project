import { initializeApp } from "firebase/app";

const firebaseConfig = {
     apiKey: "AIzaSyDbebgrJtNGej9gwMpbjjbTzsvNRtBIG1U",
     authDomain: "mun-react-redux-typescript.firebaseapp.com",
     projectId: "mun-react-redux-typescript",
     storageBucket: "mun-react-redux-typescript.appspot.com",
     messagingSenderId: "527658417669",
     appId: "1:527658417669:web:6f675f5569ef598f3de66c"
   };
   
   // Initialize Firebase
   const initializeFirebase=()=>{
        return initializeApp(firebaseConfig);
   };

   initializeFirebase();

//    export default initializeFirebase;
   