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

type CartActionType = AddToCartAction;

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

	return state;
	// throw new Error(`No Matching "${action.type}" - action type`);
};

export default cartReducer;
