import { getUniqueValues, sortSizes } from "@/utils/helpers";
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
			size: string;
			minPrice: number;
			maxPrice: number;
			price: number;
			discount: boolean;
		};
	};
	updateFilters: (e: FiltersType) => void;
};

const Filters = ({ state, updateFilters }: FiltersProps) => {
	const {
		allProducts,
		filters: {
			text,
			category,
			brand,
			size,
			minPrice,
			maxPrice,
			price,
			discount,
		},
	} = state;

	const categories = getUniqueValues(allProducts, "category");
	const brands = getUniqueValues(allProducts, "brand");
	const sizes = getUniqueValues(allProducts, "size");
	const sortedSizes = sortSizes([...sizes]);

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
									className={`${styles.filters__brandBtn} ${
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
				<div className={styles.filters__formControl}>
					<h5>SIZES</h5>
					{sortedSizes?.map((s, index) => (
						<button
							key={index}
							type="button"
							name="size"
							onClick={updateFilters}
							className={`${styles.filters__sizeBtn} ${
								size === s && styles.active
							}`}
						>
							{s}
						</button>
					))}
				</div>
				<div className={styles.filters__formControl}>
					<h5>PRICE</h5>
					<input
						type="range"
						name="price"
						onChange={updateFilters}
						min={minPrice}
						max={maxPrice}
						value={price}
						step={50}
					/>
					<div>
						<p>
							${minPrice} - ${price}
						</p>
					</div>
				</div>
				<div className={styles.filters__formControl}>
					<label htmlFor="discount">Discount</label>
					<input
						type="checkbox"
						name="discount"
						id="discount"
						onChange={updateFilters}
						checked={discount}
					/>
				</div>
			</form>
		</section>
	);
};
export default Filters;
