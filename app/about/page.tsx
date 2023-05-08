import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import About from "@/components/About/About";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export const metadata = {
	title: "Krycha Store - About",
};

const AboutPage = () => {
	return (
		<PageWrapper>
			<Breadcrumbs title="about" />
			<About />
		</PageWrapper>
	);
};
export default AboutPage;
