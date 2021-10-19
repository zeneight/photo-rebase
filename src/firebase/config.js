// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABReF4yY-1KQVEKi8PBeqT3TRKsrDbzm4",
  authDomain: "agung-97785.firebaseapp.com",
  databaseURL: "https://agung-97785.firebaseio.com",
  projectId: "agung-97785",
  storageBucket: "agung-97785.appspot.com",
  messagingSenderId: "254060979914",
  appId: "1:254060979914:web:37258b125137aa69937633"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = app.storage();
const projectFirestore = app.firestore();

export { projectFirestore, projectStorage }