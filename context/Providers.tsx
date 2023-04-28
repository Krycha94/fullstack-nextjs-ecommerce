"use client";

import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<CartProvider>{children}</CartProvider>
		</AuthProvider>
	);
};
export default Providers;
