import ProductType from "@/types/ProductType";

type FilterStateType = {
	allProducts: ProductType[];
	filteredProducts: ProductType[];
	filters: {
		text: string;
		category: string;
		brand: string;
		size: string;
		minPrice: number;
		maxPrice: number;
		price: number;
		discount: boolean;
	};
};

type UpdateFiltersAction = {
	type: "UPDATE_FILTERS";
	payload: {
		name: string;
		value: string;
	};
};

type FilterProductsAction = {
	type: "FILTER_PRODUCTS";
};

type ResetFiltersAction = {
	type: "RESET_FILTERS";
};

type FilterActionType =
	| UpdateFiltersAction
	| FilterProductsAction
	| ResetFiltersAction;

const filterReducer = (state: FilterStateType, action: FilterActionType) => {
	if (action.type === "UPDATE_FILTERS") {
		const { name, value } = action.payload;
		return { ...state, filters: { ...state.filters, [name]: value } };
	}

	if (action.type === "FILTER_PRODUCTS") {
		const { allProducts } = state;
		const { text, category, brand, size, price, discount } = state.filters;
		let tempProducts = [...allProducts];

		if (text) {
			tempProducts = tempProducts.filter((product) =>
				product.name.toLowerCase().includes(text.toLowerCase())
			);
		}
		if (category !== "all") {
			tempProducts = tempProducts.filter(
				(product) => product.category === category
			);
		}
		if (brand !== "all") {
			tempProducts = tempProducts.filter((product) => product.brand === brand);
		}
		if (size !== "all") {
			tempProducts = tempProducts.filter((product) =>
				product.size.includes(size as any)
			);
		}
		if (price) {
			tempProducts = tempProducts.filter((product) => product.price <= +price);
		}
		if (discount) {
			tempProducts = tempProducts.filter(
				(product) => product.discount === true
			);
		}

		return { ...state, filteredProducts: tempProducts };
	}

	if (action.type === "RESET_FILTERS") {
		return {
			...state,
			filters: {
				...state.filters,
				text: "",
				category: "all",
				brand: "all",
				size: "all",
				minPrice: 0,
				maxPrice: 1700,
				price: 1700,
				discount: false,
			},
		};
	}

	return state;
};

export default filterReducer;
