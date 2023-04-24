import { getUniqueValues } from "@/utils/helpers";
import ProductType from "@/types/ProductType";
import FiltersType from "@/types/FiltersType";
import styles from "./Filters.module.scss";

type FiltersProps = {
	state: {
		allProducts: ProductType[];
		filters: {
			text: string;
			category: string;
			brand: string;
		};
	};
	updateFilters: (e: FiltersType) => void;
};

const Filters = ({ state, updateFilters }: FiltersProps) => {
	const {
		allProducts,
		filters: { text, category, brand },
	} = state;

	const categories = getUniqueValues(allProducts, "category");
	const brands = getUniqueValues(allProducts, "brand");

	return (
		<section className={styles.filters}>
			<form>
				<div className={styles.filters__formControl}>
					<input
						type="text"
						name="text"
						placeholder="Search..."
						className={styles.filters__searchInput}
						value={text}
						onChange={updateFilters}
					/>
				</div>
				<div className={styles.filters__formControl}>
					<h5>CATEGORIES</h5>
					<div>
						{categories.map((c, index) => (
							<div key={index} className={styles.filters__category}>
								<button
									type="button"
									name="category"
									onClick={updateFilters}
									className={`${styles.filters__categoryBtn} ${
										c === category && styles.active
									}`}
								>
									{c}
								</button>
								<p>
									(
									{c === "all"
										? allProducts.length
										: allProducts.filter((p) => p.category === c).length}
									)
								</p>
							</div>
						))}
					</div>
				</div>
				<div className={styles.filters__formControl}>
					<h5>BRANDING</h5>
					<div>
						{brands.map((b, index) => (
							<div key={index} className={styles.filters__brand}>
								<button
									type="button"
									name="brand"
									onClick={updateFilters}
									className={`${styles.filters__categoryBtn} ${
										b === brand && styles.active
									}`}
								>
									{b}
								</button>
								<p>
									(
									{b === "all"
										? allProducts.length
										: allProducts.filter((p) => p.brand === b).length}
									)
								</p>
							</div>
						))}
					</div>
				</div>
			</form>
		</section>
	);
};
export default Filters;
