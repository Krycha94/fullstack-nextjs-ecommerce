import { products } from "@/utils/dummyData";
import Products from "@/components/Products/Products";

export const metadata = {
	title: "Krycha Store - Products",
	description:
		"Discover the latest trends in Krycha store, including women, men and kids clothing. Shop the best outfits for this season at our online store",
	icons: {
		icon: "/cloth-icon.png",
	},
};

const ProductsPage = () => {
	return (
		<>
			<Products products={products} />
		</>
	);
};
export default ProductsPage;
