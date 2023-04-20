import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CartContent from "@/components/CartContent/CartContent";

export const metadata = {
	title: "Krycha Store - Cart",
};

const CartPage = () => {
	return (
		<>
			<Breadcrumbs title="cart" />
			<CartContent />
		</>
	);
};
export default CartPage;
