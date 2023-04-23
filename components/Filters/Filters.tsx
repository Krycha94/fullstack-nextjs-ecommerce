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
		};
	};
	updateFilters: (e: FiltersType) => void;
};

const Filters = ({ state, updateFilters }: FiltersProps) => {
	const {
		allProducts,
		filters: { text, category },
	} = state;

	const categories = getUniqueValues(allProducts, "category");

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
					<h5>Category</h5>
					<div>
						{categories.map((c, index) => (
							<button
								key={index}
								type="button"
								name="category"
								onClick={updateFilters}
								className={`${styles.filters__categoryBtn} ${
									c === category && styles.active
								}`}
							>
								{c}
							</button>
						))}
					</div>
				</div>
			</form>
		</section>
	);
};
export default Filters;
