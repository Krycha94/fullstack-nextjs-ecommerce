"use client";

import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import CartColumns from "../CartColumns/CartColumns";
import CartItem from "../CartItem/CartItem";
import CartTotals from "../CartTotals/CartTotals";
import styles from "./CartContent.module.scss";

const CartContent = () => {
	const { cart, clearCart } = useCartContext();

	const emptyCart = (
		<div className={styles.cartContent__empty}>
			<h2>Your cart is empty!</h2>
			<Link href="/products">Add products</Link>
		</div>
	);

	return (
		<section className={styles.cartContent}>
			{cart.length < 1 ? (
				emptyCart
			) : (
				<>
					<div className={styles.cartContent__items}>
						<CartColumns />
						{cart?.map((item) => (
							<CartItem key={item.id} {...item} />
						))}
						<div className={styles.cartContent__links}>
							<Link href="/products">CONTINUE SHOPPING</Link>
							<button onClick={clearCart}>CLEAR CART</button>
						</div>
					</div>
					<CartTotals />
				</>
			)}
		</section>
	);
};
export default CartContent;
