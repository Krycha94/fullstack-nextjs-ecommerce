import styles from "./Filters.module.scss";

type FiltersProps = {
	state: { filters: { text: string } };
	updateFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filters = ({ state, updateFilters }: FiltersProps) => {
	const {
		filters: { text },
	} = state;

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
			</form>
		</section>
	);
};
export default Filters;
