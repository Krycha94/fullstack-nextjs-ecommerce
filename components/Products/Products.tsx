"use client";

import { useEffect, useReducer } from "react";
import filterReducer from "@/reducers/FilterReducer";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Filters from "../Filters/Filters";
import ProductList from "../ProductList/ProductList";
import ProductType from "@/types/ProductType";
import styles from "./Products.module.scss";

type ProductsProps = {
	products: ProductType[];
};

const Products = ({ products }: ProductsProps) => {
	const [state, dispatch] = useReducer(filterReducer, {
		allProducts: products,
		filteredProducts: products,
		filters: {
			text: "",
			category: "all",
			brand: "all",
			size: "all",
			minPrice: 0,
			maxPrice: 1700,
			price: 1700,
			discount: false,
		},
	});
	// console.log(state.filters);

	const updateFilters = (e: any) => {
		let name = e.target.name;
		let value = e.target.value;

		if (name === "category" || name === "brand" || name === "size") {
			value = e.target.textContent;
		}

		if (name === "discount") {
			value = e.target.checked;
		}

		console.log(name, value);

		dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
	};

	useEffect(() => {
		dispatch({ type: "FILTER_PRODUCTS" });
	}, [state.filters]);

	return (
		<>
			<Breadcrumbs title="products" />
			<div className={styles.products}>
				<Filters state={{ ...state }} updateFilters={updateFilters} />
				<div>
					<div>Sort component</div>
					<ProductList products={state.filteredProducts} />
				</div>
			</div>
		</>
	);
};
export default Products;
