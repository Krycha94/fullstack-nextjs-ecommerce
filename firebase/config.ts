import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDgtzKno273A1Wgbgbp9pYnpRz2QwrOYIs",
	authDomain: "krycha-store.firebaseapp.com",
	projectId: "krycha-store",
	storageBucket: "krycha-store.appspot.com",
	messagingSenderId: "111553918233",
	appId: "1:111553918233:web:2f874d52f40879c150c188",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
