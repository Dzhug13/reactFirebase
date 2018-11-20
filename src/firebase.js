import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCAtSE4hQLs5G9YXyTJk3IWx640MHKmE3E",
  authDomain: "first-flight-481e8.firebaseapp.com",
  databaseURL: "https://first-flight-481e8.firebaseio.com",
  projectId: "first-flight-481e8",
  storageBucket: "first-flight-481e8.appspot.com",
  messagingSenderId: "135575456516"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
