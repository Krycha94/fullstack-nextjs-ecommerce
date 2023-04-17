import { db } from "@/firebase/config";
import { getDocs, collection } from "firebase/firestore";
import Hero from "@/components/Hero/Hero";
import Collections from "@/components/Collections/Collections";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import Contact from "@/components/Contact/Contact";
import ProductType from "@/types/ProductType";

export default async function Home() {
	const productsCollectionRef = collection(db, "featured");
	const data = await getDocs(productsCollectionRef);
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
}
