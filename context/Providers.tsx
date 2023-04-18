"use client";

import { CartProvider } from "./CartContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return <CartProvider>{children}</CartProvider>;
};
export default Providers;
