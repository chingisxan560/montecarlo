import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCsSSECnugCJ9JjSgyKL9wqKvbagRrHW58",
  authDomain: "monte-carlo-2a212.firebaseapp.com",
  projectId: "monte-carlo-2a212",
  storageBucket: "monte-carlo-2a212.firebasestorage.app",
  messagingSenderId: "156719082129",
  appId: "1:156719082129:web:85bc43a8c5b460ac442d30",
  measurementId: "G-Q7XG3NEZSB",
  databaseURL: "https://monte-carlo-2a212-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, ref, set };
