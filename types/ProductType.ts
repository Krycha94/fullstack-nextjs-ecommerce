type brand = "adidas" | "reebok" | "nike" | "new balance";

type category = "men" | "women" | "kids";

type size = "XS" | "S" | "M" | "L" | "XL";

type ProductType = {
	brand: brand;
	category: category;
	description: string;
	discount: boolean;
	featured?: boolean;
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
