import CartItemType from "@/types/CartItemType";
import ProductType from "@/types/ProductType";

type CartStateType = {
	cart: CartItemType[];
};

type AddToCartAction = {
	type: "ADD_TO_CART";
	payload: {
		id: string;
		size: string;
		amount: number;
		product: ProductType;
	};
};

type RemoveFromCartAction = {
	type: "REMOVE_FROM_CART";
	payload: string;
};

type ClearCartAction = {
	type: "CLEAR_CART";
};

type ToggleAmountAction = {
	type: "TOGGLE_AMOUNT";
	payload: { id: string; value: string };
};

type CartActionType =
	| AddToCartAction
	| RemoveFromCartAction
	| ToggleAmountAction
	| ClearCartAction;

const cartReducer = (state: CartStateType, action: CartActionType) => {
	if (action.type === "ADD_TO_CART") {
		const { id, size, amount, product } = action.payload;

		const tempProduct = state.cart.find((i) => i.id === id + size);

		if (tempProduct) {
			const tempCart = state.cart.map((cartItem) => {
				if (cartItem.id === id + size) {
					let newAmount = cartItem.amount + amount;
					if (newAmount > cartItem.max) {
						newAmount = cartItem.max;
					}
					return { ...cartItem, amount: newAmount };
				} else {
					return cartItem;
				}
			});

			return { ...state, cart: tempCart };
		} else {
			const newItem = {
				id: id + size,
				size,
				amount,
				name: product.name,
				image: product.images[2].url,
				price: product.price,
				max: product.stock,
			};
			return { ...state, cart: [...state.cart, newItem] };
		}
	}

	if (action.type === "REMOVE_FROM_CART") {
		const tempCart = state.cart.filter((item) => item.id !== action.payload);
		return { ...state, cart: tempCart };
	}

	if (action.type === "CLEAR_CART") {
		return { ...state, cart: [] };
	}

	if (action.type === "TOGGLE_AMOUNT") {
		const { id, value } = action.payload;
		const tempCart = state.cart.map((item) => {
			if (item.id === id) {
				if (value === "inc") {
					let newAmount = item.amount + 1;
					if (newAmount > item.max) {
						newAmount = item.max;
					}
					return { ...item, amount: newAmount };
				} else {
					let newAmount = item.amount - 1;
					if (newAmount < 1) {
						newAmount = 1;
					}
					return { ...item, amount: newAmount };
				}
			} else {
				return item;
			}
		});

		return { ...state, cart: tempCart };
	}

	return state;
	// throw new Error(`No Matching "${action.type}" - action type`);
};

export default cartReducer;
