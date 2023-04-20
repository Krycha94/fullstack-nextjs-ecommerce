import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ProductType from "@/types/ProductType";

type Params = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({ params: { productId } }: Params) => {
	const productDocRef = doc(db, "products", productId);
	const product = await getDoc(productDocRef).then((doc) => doc.data());

	if (!product) {
		return {
			title: "product not found",
		};
	}

	return {
		title: `Krycha Store - ${product.name}`,
		description: product.description,
	};
};

const SingleProductPage = async ({ params: { productId } }: Params) => {
	const productDocRef = doc(db, "products", productId);
	const product = (await getDoc(productDocRef).then((doc) => ({
		...doc.data(),
		id: doc.id,
	}))) as ProductType;

	return (
		<>
			<Breadcrumbs title={product?.name} product />
			<ProductDetails product={product} />
		</>
	);
};
export default SingleProductPage;
