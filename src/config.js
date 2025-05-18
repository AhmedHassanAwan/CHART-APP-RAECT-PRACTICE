
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyAlYhmbrPQ7JznebevC0427HH9RsVym0N0",
//   authDomain: "fir-chart-app-practice.firebaseapp.com",
//   projectId: "fir-chart-app-practice",
//   storageBucket: "fir-chart-app-practice.firebasestorage.app",
//   messagingSenderId: "970498229551",
//   appId: "1:970498229551:web:c70fea0f4caeb0e69ecdda",
//   measurementId: "G-SRLL1LYLY8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);

// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "fir-chart-app-practice.firebaseapp.com",
//   databaseURL: "https://fir-chart-app-practice-default-rtdb.europe-west1.firebasedatabase.app/",
//   projectId: "fir-chart-app-practice",
//   storageBucket: "fir-chart-app-practice.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// export const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);
// export const auth = getAuth (app)




import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAlYhmbrPQ7JznebevC0427HH9RsVym0N0",
  authDomain: "fir-chart-app-practice.firebaseapp.com",
  databaseURL: "https://fir-chart-app-practice-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-chart-app-practice",
  storageBucket: "fir-chart-app-practice.firebasestorage.app",
  messagingSenderId: "970498229551",
  appId: "1:970498229551:web:c70fea0f4caeb0e69ecdda",
  measurementId: "G-SRLL1LYLY8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);




