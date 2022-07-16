// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX3LL101GoRPWnnPxXXdKGe8k6iQn0ewk",
  authDomain: "naz-wright-portfolio.firebaseapp.com",
  projectId: "naz-wright-portfolio",
  storageBucket: "naz-wright-portfolio.appspot.com",
  messagingSenderId: "1071217122543",
  appId: "1:1071217122543:web:8866c260af7690d3d64f1a",
  databaseURL: "https://naz-wright-portfolio-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// intialize database
const database = getDatabase(app);

export function submitAssessment(assessmentData) {
  const currentDate = new Date();
  const uniqueID = assessmentData.name + "-" + currentDate.getTime();
  console.log("running");
  console.log(assessmentData);
  set(ref(database, "assessments/" + uniqueID), {
    ...assessmentData,
  });
}
