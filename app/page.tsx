import { db } from "@/firebase/config";
import { getDocs, collection, query, where } from "firebase/firestore";
import Hero from "@/components/Hero/Hero";
import Collections from "@/components/Collections/Collections";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import Contact from "@/components/Contact/Contact";
import ProductType from "@/types/ProductType";

const Home = async () => {
	//firebase database fetch featured products only
	const productsCollectionRef = collection(db, "products");
	const q = query(productsCollectionRef, where("featured", "==", true));
	const data = await getDocs(q);
	const products = data.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	})) as ProductType[];

	return (
		<>
			<Hero />
			<Collections />
			<PopularProducts products={products} />
			<Contact />
		</>
	);
};

export default Home;
