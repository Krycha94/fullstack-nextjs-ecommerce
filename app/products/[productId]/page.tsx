import { db } from "@/firebase/config";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ProductType from "@/types/ProductType";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

type Params = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({ params: { productId } }: Params) => {
	const productDocRef = doc(db, "products", productId);
	const product = await getDoc(productDocRef).then((doc) => doc.data());

	if (!product?.name) {
		return {
			title: "Product not found",
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

	if (!product?.name)
		throw new Error(
			"Something went wrong, please make sure url is correct or there is problem with api, please try again."
		);

	return (
		<PageWrapper>
			<Breadcrumbs title={product?.name} product />
			<ProductDetails product={product} />
		</PageWrapper>
	);
};

export const generateStaticParams = async () => {
	const productsCollectionRef = collection(db, "products");
	const data = await getDocs(productsCollectionRef);
	const products = data.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	})) as ProductType[];

	return products.map((product) => ({ productId: `${product.id}` }));
};

export default SingleProductPage;
