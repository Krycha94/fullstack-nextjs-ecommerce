"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
	user: any;
};

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState({ id: 1, name: "Krystian" });

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);
