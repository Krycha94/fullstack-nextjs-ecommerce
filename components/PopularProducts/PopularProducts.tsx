import Product from "../Product/Product";
import ProductType from "@/types/ProductType";
import styles from "./PopularProducts.module.scss";

type PopularProductsProps = {
	products: ProductType[];
};

const PopularProducts = ({ products }: PopularProductsProps) => {
	return (
		<section className={styles.products}>
			<h2>Popular Products</h2>
			<div className={styles.products__container}>
				{products.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</div>
		</section>
	);
};
export default PopularProducts;
