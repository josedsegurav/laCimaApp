import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB179zzIpwX48wA3hPrW2PDuRZt_8vIE98",
    authDomain: "lacima-1d763.firebaseapp.com",
    projectId: "lacima-1d763",
    storageBucket: "lacima-1d763.appspot.com",
    messagingSenderId: "444436437584",
    appId: "1:444436437584:web:ec2dae02d314238ba78f55"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async(userAuth, addInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...addInformation
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userDocRef;
}

export const createAuthUserWithEMailAndPassword = async (email, password) => {
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth ,email, password);
   
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
 
    return await signInWithEmailAndPassword(auth, email, password); 

}