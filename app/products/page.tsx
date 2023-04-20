import { db } from "@/firebase/config";
import { getDocs, collection } from "firebase/firestore";
import Products from "@/components/Products/Products";
import ProductType from "@/types/ProductType";

export const metadata = {
	title: "Krycha Store - Products",
};

const ProductsPage = async () => {
	//firebase database fetch all products
	const productsCollectionRef = collection(db, "products");
	const data = await getDocs(productsCollectionRef);
	const products = data.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	})) as ProductType[];

	return <Products products={products} />;
};
export default ProductsPage;
