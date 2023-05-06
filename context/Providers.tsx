"use client";

import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<CartProvider>
				<Toaster toastOptions={{ duration: 3000 }} />
				{children}
			</CartProvider>
		</AuthProvider>
	);
};
export default Providers;
