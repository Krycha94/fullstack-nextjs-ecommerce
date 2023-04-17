import Product from "../Product/Product";
import styles from "./ProductList.module.scss";

type ProductsListProps = {
	// products: ProductType[];
	products: any;
};

const ProductList = ({ products }: ProductsListProps) => {
	if (products.length < 1) {
		return <p>Sorrym no products matched your search...</p>;
	}

	return (
		<section className={styles.products}>
			{products?.map((product: any) => (
				<Product key={product.id} {...product} />
			))}
		</section>
	);
};
export default ProductList;
