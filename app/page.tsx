import Hero from "@/components/Hero/Hero";
import Collections from "@/components/Collections/Collections";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import Contact from "@/components/Contact/Contact";

export default function Home() {
	return (
		<>
			<Hero />
			<Collections />
			<PopularProducts />
			<Contact />
		</>
	);
}
