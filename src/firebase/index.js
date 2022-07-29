import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDvSJaxWg8NIxyPCai1b1_i7YqIgoF8rz0",
    authDomain: "drozdallanportfolio.firebaseapp.com",
    projectId: "drozdallanportfolio",
    storageBucket: "drozdallanportfolio.appspot.com",
    messagingSenderId: "561270481596",
    appId: "1:561270481596:web:8923af385da404f0f4e6b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function addMessage(sender, message) {
    return await addDoc(collection(db, "messages"), {
        from: sender,
        message: message
    })
}

export {addMessage};
