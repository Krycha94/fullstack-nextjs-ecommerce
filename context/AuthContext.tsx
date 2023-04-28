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
} from "firebase/auth";

type AuthContextType = {
	user: FirebaseUser | null;
	SignUp: any;
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

	const SignUp = async (email: string, password: string) => {
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

	return (
		<AuthContext.Provider value={{ user, SignUp }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);
