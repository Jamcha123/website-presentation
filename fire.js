import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWJwjl18-FOc65YdCWQ0qwmwJ_mEDxR1A",
    authDomain: "presentation-c0451.firebaseapp.com",
    projectId: "presentation-c0451",
    storageBucket: "presentation-c0451.appspot.com",
    messagingSenderId: "85157776899",
    appId: "1:85157776899:web:4b6ac96b00f56d716e4836",
    measurementId: "G-5V907RSLWD"  
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