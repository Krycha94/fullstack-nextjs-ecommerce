type category = "men" | "women" | "kids";

type size = "XS" | "S" | "M" | "L" | "XL";

type ProductType = {
	brand: string;
	category: category;
	description: number;
	discount: boolean;
	id: string;
	images: {
		id: string;
		url: string;
	}[];
	name: string;
	price: number;
	reviews: number;
	size: size[];
	stars: number;
	stock: number;
};

export default ProductType;
