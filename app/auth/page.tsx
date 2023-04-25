import Authentication from "@/components/Authentication/Authentication";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export const metadata = {
	title: "Krycha Store - Authentication",
};

const AuthPage = () => {
	return (
		<>
			<Breadcrumbs title="authentication" />
			<Authentication />
		</>
	);
};
export default AuthPage;
