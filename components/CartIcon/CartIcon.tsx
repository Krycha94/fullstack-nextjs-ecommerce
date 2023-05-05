import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import styles from "./CartIcon.module.scss";
import { BiShoppingBag } from "react-icons/bi";

const CartIcon = () => {
	const { totalAmount, totalItems } = useCartContext();

	return (
		<div className={styles.cartIcon}>
			<span className={styles.cartIcon__price}>${totalAmount.toFixed(2)}</span>
			<Link href="/cart" className={styles.cartIcon__link}>
				<BiShoppingBag />
				<span className={styles.cartIcon__badge}>{totalItems}</span>
			</Link>
		</div>
	);
};
export default CartIcon;
