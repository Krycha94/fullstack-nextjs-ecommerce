import ProductType from "@/types/ProductType";

export const getUniqueValues = (array: ProductType[], type: string) => {
	const unique = array.map((item: any) => item[type]);

	return ["all", ...new Set(unique)];
};
