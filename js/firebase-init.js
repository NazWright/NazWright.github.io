// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

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

// intialize authentication
const auth = getAuth(app);

export function submitAssessment(assessmentData) {
  const currentDate = new Date();
  const uniqueID = assessmentData.name + "-" + currentDate.getTime();
  console.log("running");
  console.log(assessmentData);
  set(ref(database, "assessments/" + uniqueID), {
    ...assessmentData,
  });
}

export function createProject(projectData) {
  set(ref(database, "projects/" + projectData.id));
}

export function authenticateUser(username, password) {
  // check if the user is in the database.
  // if the user is not then return false
  // or else return true
  set(ref(database, "users/" + username), { username, password });
}

export async function createUser(username, password) {
  const auth = getAuth();
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      username,
      password
    );
    // user is signed in
    const user = userCredentials.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
}
