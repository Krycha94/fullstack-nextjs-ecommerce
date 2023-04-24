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
	resetFilters: () => void;
};

const Filters = ({ state, updateFilters, resetFilters }: FiltersProps) => {
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
			<div className={styles.filters__content}>
				<form onSubmit={(e) => e.preventDefault()}>
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
						<div className={styles.filters__sizeContainer}>
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
							className={styles.filters__priceInput}
						/>
						<div>
							<p>
								${minPrice} - ${price}
							</p>
						</div>
					</div>
					<div className={styles.filters__formControl}>
						<div className={styles.filters__discountContainer}>
							<label htmlFor="discount">Discount</label>
							<input
								type="checkbox"
								name="discount"
								id="discount"
								onChange={updateFilters}
								checked={discount}
								className={styles.filters__discountInput}
							/>
						</div>
					</div>
					<button
						type="button"
						onClick={resetFilters}
						className={styles.filters__resetBtn}
					>
						Reset Filters
					</button>
				</form>
			</div>
		</section>
	);
};
export default Filters;
