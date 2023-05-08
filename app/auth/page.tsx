import Authentication from "@/components/Authentication/Authentication";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export const metadata = {
	title: "Krycha Store - Authentication",
};

const AuthPage = () => {
	return (
		<PageWrapper>
			<Breadcrumbs title="authentication" />
			<Authentication />
		</PageWrapper>
	);
};
export default AuthPage;
