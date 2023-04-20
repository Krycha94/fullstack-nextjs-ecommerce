"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import cartReducer from "@/reducers/CartReducer";
import ProductType from "@/types/ProductType";
import CartItemType from "@/types/CartItemType";

export const initialState = {
	cart: [],
};

type addToCartType = (
	id: string,
	size: string,
	amount: number,
	product: ProductType
) => void;

type CartContextType = {
	cart: CartItemType[];
	addToCart: addToCartType;
	removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType>(null!);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const addToCart = (
		id: string,
		size: string,
		amount: number,
		product: ProductType
	) => {
		dispatch({
			type: "ADD_TO_CART",
			payload: { id, size, amount, product },
		});
	};

	const removeFromCart = (id: string) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: id });
	};

	return (
		<CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => useContext(CartContext);
