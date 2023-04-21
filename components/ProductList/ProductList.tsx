import Product from "../Product/Product";
import ProductType from "@/types/ProductType";
import styles from "./ProductList.module.scss";

type ProductsListProps = {
	products: ProductType[];
};

const ProductList = ({ products }: ProductsListProps) => {
	if (products.length < 1) {
		return <p>Sorry no products matched your search...</p>;
	}

	return (
		<section className={styles.products}>
			{products?.map((product) => (
				<Product key={product.id} {...product} />
			))}
		</section>
	);
};
export default ProductList;
