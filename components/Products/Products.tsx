"use client";

import { useEffect, useReducer } from "react";
import filterReducer from "@/reducers/FilterReducer";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Filters from "@/components/Filters/Filters";
import ProductList from "@/components/ProductList/ProductList";
import Sort from "@/components/Sort/Sort";
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
		sort: "price-lowest",
	});

	const updateFilters = (e: any) => {
		let name = e.target.name;
		let value = e.target.value;

		if (name === "category" || name === "brand" || name === "size") {
			value = e.target.textContent;
		}

		if (name === "discount") {
			value = e.target.checked;
		}

		dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
	};

	const resetFilters = () => {
		dispatch({ type: "RESET_FILTERS" });
	};

	const updateSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch({ type: "UPDATE_SORT", payload: event.target.value });
	};

	useEffect(() => {
		dispatch({ type: "FILTER_PRODUCTS" });
		dispatch({ type: "SORT_PRODUCTS" });
	}, [state.filters, state.sort]);

	return (
		<>
			<Breadcrumbs title="products" />
			<div className={styles.products}>
				<Filters
					state={{ ...state }}
					updateFilters={updateFilters}
					resetFilters={resetFilters}
				/>
				<div>
					<Sort state={{ ...state }} updateSort={updateSort} />
					<ProductList products={state.filteredProducts} />
				</div>
			</div>
		</>
	);
};
export default Products;
