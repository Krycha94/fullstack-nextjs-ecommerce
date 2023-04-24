import ProductType from "@/types/ProductType";
import styles from "./Sort.module.scss";

type SortProps = {
	state: {
		allProducts: ProductType[];
		filteredProducts: ProductType[];
		sort: string;
	};
	updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Sort = ({ state, updateSort }: SortProps) => {
	const { allProducts, filteredProducts, sort } = state;

	return (
		<section className={styles.sort}>
			<p>
				Showing {filteredProducts.length} of {allProducts.length} results
			</p>
			<form className={styles.sort__form}>
				<label htmlFor="sort">Sort by: </label>
				<select
					name="sort"
					id="sort"
					value={sort}
					onChange={updateSort}
					className={styles.sort__input}
				>
					<option value="price-lowest">Price (Low To High)</option>
					<option value="price-highest">Price (High To Low)</option>
					<option value="name-a">Name (A-Z)</option>
					<option value="name-z">Name(Z-A)</option>
				</select>
			</form>
		</section>
	);
};
export default Sort;
