// Import the functions you need from the SDKs you need
// שימוש ב-CDN כדי שהדפדפן יבין מאיפה להביא את הקוד ללא התקנות נוספות
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZuI7AaDZVteUhUT_eIVCR5SIdU0jhqUg",
  authDomain: "saban-kiosk-core.firebaseapp.com",
  projectId: "saban-kiosk-core",
  storageBucket: "saban-kiosk-core.firebasestorage.app",
  messagingSenderId: "866976260818",
  appId: "1:866976260818:web:0e3ec12df72291c77f430b",
  measurementId: "G-ZVV23FRJ6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // הוספנו אנליטיקס
const db = getFirestore(app);        // הוספנו את מסד הנתונים (החשוב ביותר!)

// ייצוא המשתנים כדי שקבצים אחרים יוכלו להשתמש בהם
export { app, db, analytics };