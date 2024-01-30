import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoi-DcIhILyugDp2maK5HMKHoyvjThUEk",
  authDomain: "vuejs-5d3f5.firebaseapp.com",
  projectId: "vuejs-5d3f5",
  storageBucket: "vuejs-5d3f5.appspot.com",
  messagingSenderId: "441594328556",
  appId: "1:441594328556:web:bb1bec6ec792125e197cc9",
  measurementId: "G-P95BYJ21X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
