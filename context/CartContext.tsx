"use client";

import {
	createContext,
	useEffect,
	useContext,
	useReducer,
	ReactNode,
} from "react";
import cartReducer from "@/reducers/CartReducer";
import ProductType from "@/types/ProductType";
import CartItemType from "@/types/CartItemType";

const getLocalStorageCart = () =>
	JSON.parse(localStorage.getItem("cart") || "") || [];

export const initialState = {
	cart: getLocalStorageCart(),
	totalItems: 0,
	totalAmount: 0,
	shippingFee: 9.99,
};

type addToCartType = (
	id: string,
	size: string,
	amount: number,
	product: ProductType
) => void;

type CartContextType = {
	cart: CartItemType[];
	totalAmount: number;
	totalItems: number;
	shippingFee: number;
	addToCart: addToCartType;
	removeFromCart: (id: string) => void;
	toggleAmount: (id: string, value: string) => void;
	clearCart: () => void;
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

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};

	const toggleAmount = (id: string, value: string) => {
		dispatch({ type: "TOGGLE_AMOUNT", payload: { id, value } });
	};

	useEffect(() => {
		dispatch({ type: "COUNT_TOTALS" });
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{ ...state, addToCart, removeFromCart, clearCart, toggleAmount }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => useContext(CartContext);
