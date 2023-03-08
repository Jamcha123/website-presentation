import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth';

const config = {
    apiKey: "AIzaSyDko0Co4cV3VCCic8_X9cOxGH0ODYrLoXs",
    authDomain: "project-8c417.firebaseapp.com",
    projectId: "project-8c417",
    storageBucket: "project-8c417.appspot.com",
    messagingSenderId: "52432743972",
    appId: "1:52432743972:web:0d8a39774dd9348905b2b1",
    measurementId: "G-FB1FEKLJRQ"
}
const app = initializeApp(config);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    if(user == null){
        console.log("user successfully logged in");
    }else{
        signInWithPopup(auth, new GoogleAuthProvider());
    }
})