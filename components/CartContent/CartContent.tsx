"use client";

import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import styles from "./CartContent.module.scss";
import CartColumns from "../CartColumns/CartColumns";

const CartContent = () => {
	const { cart } = useCartContext();

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
							<div>Cart Item</div>
						))}
						<div className={styles.cartContent__links}>
							<Link href="/products">CONTINUE SHOPPING</Link>
							<button>CLEAR CART</button>
						</div>
					</div>
					<div>CartTotals</div>
				</>
			)}
		</section>
	);
};
export default CartContent;
