import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export const metadata = {
	title: "Krycha Store - Cart",
	description:
		"Discover the latest trends in Krycha store, including women, men and kids clothing. Shop the best outfits for this season at our online store",
	icons: {
		icon: "/cloth-icon.png",
	},
};

const CartPage = () => {
	return (
		<>
			<Breadcrumbs title="cart" />
		</>
	);
};
export default CartPage;
