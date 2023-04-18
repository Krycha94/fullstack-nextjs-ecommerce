"use client";
import { cartProducts, products } from "@/utils/dummyData";
import { createContext, useContext, useReducer, ReactNode } from "react";
import cartReducer from "@/reducers/CartReducer";

export const initialState = {
	// cart: [],
	cart: cartProducts,
	amount: 5,
};

type CartContextType = {
	//todo import product type
	cart: any[];
};

const CartContext = createContext<CartContextType>(initialState);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	return (
		<CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
	);
};

export const useCartContext = () => useContext(CartContext);
