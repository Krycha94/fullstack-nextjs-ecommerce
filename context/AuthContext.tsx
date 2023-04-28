"use client";

import {
	createContext,
	ReactNode,
	useContext,
	useState,
	useEffect,
} from "react";
import { User as FirebaseUser } from "firebase/auth";
import { auth } from "@/firebase/config";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	updateProfile,
} from "firebase/auth";

type AuthContextType = {
	user: FirebaseUser | null;
	register: (email: string, password: string) => void;
	logout: () => void;
	updateUser: (username: string) => void;
};

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<FirebaseUser | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setIsLoading(true);
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setIsLoading(false);
		});
	}, []);

	const register = async (email: string, password: string) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(
				`Account created! Welcome ${userCredential.user.displayName}, ${userCredential.user.email}`
			);
		} catch (e) {
			const errorCode = (e as any).code;
			const errorMessage = (e as Error).message;
			console.log(`Register failed ${errorCode}, ${errorMessage}`);
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
			console.log("logged out!");
		} catch (error) {
			console.log("could not logout!");
		}
	};

	const updateUser = async (username: string) => {
		try {
			await updateProfile(auth.currentUser as FirebaseUser, {
				displayName: username,
			});
			console.log("profile updated!");
		} catch (error) {
			console.log("could not update profile!");
		}
	};

	return (
		<AuthContext.Provider value={{ user, register, logout, updateUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);
