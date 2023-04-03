// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAM3APbQAHeJJhOAVCMQNiDGplBmx5o3DY',
  authDomain: 'vite-todo-f7b54.firebaseapp.com',
  projectId: 'vite-todo-f7b54',
  storageBucket: 'vite-todo-f7b54.appspot.com',
  messagingSenderId: '529279043221',
  appId: '1:529279043221:web:d07c9edeb8c6b41a70fd9c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
