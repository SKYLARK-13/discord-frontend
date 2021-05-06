import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6-lxBLFXlpydwf8LTq7vrR1Y6wnWhNQ8",
  authDomain: "discord-clone-mern-9fa37.firebaseapp.com",
  projectId: "discord-clone-mern-9fa37",
  storageBucket: "discord-clone-mern-9fa37.appspot.com",
  messagingSenderId: "794075916518",
  appId: "1:794075916518:web:4ef13e2e0fea502645f327",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
