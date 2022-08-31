// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADogRs1w5i5ebMeBzeHJjim0hKaZStp3A",
  authDomain: "warehouse-f79ac.firebaseapp.com",
  projectId: "warehouse-f79ac",
  storageBucket: "warehouse-f79ac.appspot.com",
  messagingSenderId: "394786117077",
  appId: "1:394786117077:web:2a34671f05d55611c1995c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;