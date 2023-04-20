import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductList from "../ProductList/ProductList";
import ProductType from "@/types/ProductType";
import styles from "./Products.module.scss";

type ProductsProps = {
	products: ProductType[];
};

const Products = ({ products }: ProductsProps) => {
	return (
		<>
			<Breadcrumbs title="products" />
			<div className={styles.products}>
				<div>Filters component</div>
				<div>
					<div>Sort component</div>
					<ProductList products={products} />
				</div>
			</div>
		</>
	);
};
export default Products;
