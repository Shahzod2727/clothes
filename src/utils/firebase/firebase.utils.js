import { initializeApp } from 'firebase/app';
import {
  getAuth,
  
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzGbgEa9G-FLav5KFpQGXraBu7LPzA7oc",
  authDomain: "clothes-db-e7e68.firebaseapp.com",
  projectId: "clothes-db-e7e68",
  storageBucket: "clothes-db-e7e68.appspot.com",
  messagingSenderId: "1089490008318",
  appId: "1:1089490008318:web:f5a380fe65b78d888d0daf",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
