import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import About from "@/components/About/About";

export const metadata = {
	title: "Krycha Store - About",
	description:
		"Discover the latest trends in Krycha store, including women, men and kids clothing. Shop the best outfits for this season at our online store",
	icons: {
		icon: "/cloth-icon.png",
	},
};

const AboutPage = () => {
	return (
		<>
			<Breadcrumbs title="about" />
			<About />
		</>
	);
};
export default AboutPage;
