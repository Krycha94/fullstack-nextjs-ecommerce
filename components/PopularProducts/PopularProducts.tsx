import { products } from "@/utils/dummyData";
import styles from "./PopularProducts.module.scss";
import Product from "../Product/Product";

const PopularProducts = () => {
	return (
		<section className={styles.products}>
			<h2>Popular Products</h2>
			<div className={styles.products__container}>
				{products.slice(0, 4).map((product) => (
					<Product key={product.id} {...product} />
				))}
			</div>
		</section>
	);
};
export default PopularProducts;
