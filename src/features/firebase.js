import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGpu1Xo6O9SnyQOsCzfhUJ0a4t-CgqGz8",
    authDomain: "microdegree-ef621.firebaseapp.com",
    projectId: "microdegree-ef621",
    storageBucket: "microdegree-ef621.appspot.com",
    messagingSenderId: "140843488190",
    appId: "1:140843488190:web:d490f0d47d3ec8634d5fef",
    measurementId: "G-MKB7J1D7YV"
  };

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();
export default db


// const app = initializeApp(firebaseConfig);
// const db = getFirestore();
// export default db