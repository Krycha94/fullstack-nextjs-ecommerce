import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import About from "@/components/About/About";

export const metadata = {
	title: "Krycha Store - About",
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
