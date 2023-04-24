import ProductType from "@/types/ProductType";

export const getUniqueValues = (array: ProductType[], type: string) => {
	let unique = array.map((item: any) => item[type]);

	if (type === "size") {
		unique = unique.flat();
	}

	return ["all", ...new Set(unique)];
};

export const sortSizes = (array: string[]) => {
	const weights: {
		[key: string]: number;
	} = {
		all: 1,
		XS: 2,
		S: 3,
		M: 4,
		L: 5,
		XL: 6,
	};
	return array.sort((a, b) => weights[a] - weights[b]);
};
