import { products } from "@/utils/dummyData";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

//TODO DYNAMIC METADATA

const SingleProductPage = () => {
	const product = products[1];

	return (
		<>
			<Breadcrumbs title="dummy product" product />
			<ProductDetails product={product} />
		</>
	);
};
export default SingleProductPage;
