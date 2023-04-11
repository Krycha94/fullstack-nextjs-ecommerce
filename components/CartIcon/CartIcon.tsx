import Link from "next/link";
import { RiShoppingBasketLine } from "react-icons/ri";
import styles from "./CartIcon.module.scss";


const CartIcon = () => {
	return (
		<div className={styles.cartIcon}>
			<span className={styles.cartIcon__price}>$10.00</span>
			<Link href="/cart" className={styles.cartIcon__link}>
				<RiShoppingBasketLine />
				<span className={styles.cartIcon__badge}>4</span>
			</Link>
		</div>
	);
};
export default CartIcon;
