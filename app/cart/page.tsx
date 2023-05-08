import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CartContent from "@/components/CartContent/CartContent";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export const metadata = {
	title: "Krycha Store - Cart",
};

const CartPage = () => {
	return (
		<PageWrapper>
			<Breadcrumbs title="cart" />
			<CartContent />
		</PageWrapper>
	);
};
export default CartPage;
