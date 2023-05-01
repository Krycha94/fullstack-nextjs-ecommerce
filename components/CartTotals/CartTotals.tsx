import Link from "next/link";
import getStripe from "@/lib/getStripe";
import { useCartContext } from "@/context/CartContext";
import { useAuthContext } from "@/context/AuthContext";
import styles from "./CartTotals.module.scss";

const CartTotals = () => {
	const { totalAmount, shippingFee, cart } = useCartContext();
	const { user } = useAuthContext();

	const handleCheckout = async () => {
		const stripe = await getStripe();
		const response = await fetch("/api/stripe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(cart),
		});

		if ((response as any).statusCode === 500) return;

		const data = await response.json();

		stripe!.redirectToCheckout({ sessionId: data.id });
	};

	return (
		<div className={styles.totals}>
			<div className={styles.totals__discount}>
				<p>DISCOUNT CODES</p>
				<form className={styles.totals__form}>
					<input
						type="text"
						placeholder="Coupon code"
						className={styles.totals__formInput}
					/>
					<button
						type="submit"
						onClick={(e) => e.preventDefault()}
						className={styles.totals__formBtn}
					>
						APPLY
					</button>
				</form>
			</div>
			<div className={styles.totals__proceed}>
				<h5>
					Subtotal: <span>${totalAmount.toFixed(2)}</span>
				</h5>
				<p>
					Shipping Fee: <span>${shippingFee}</span>
				</p>
				<h4>
					Total: <span>${(totalAmount + shippingFee).toFixed(2)}</span>
				</h4>
				{user ? (
					<button onClick={handleCheckout} className={styles.totals__link}>
						Checkout
					</button>
				) : (
					<Link href="auth" className={styles.totals__link}>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};
export default CartTotals;
