import { initialState } from "@/context/CartContext";

// type AddToCartAction = {
// 	type: any;
// 	payload: any;
// };

// type CartAction = AddToCartAction;

const cartReducer = (state: typeof initialState, action: any) => {
	return state;
	// throw new Error(`No Matching "${action.type}" - action type`);
};

export default cartReducer;
