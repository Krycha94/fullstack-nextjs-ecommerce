import { useCartContext } from "@/context/CartContext";
import styles from "./CartTotals.module.scss";

const CartTotals = () => {
	const { totalAmount, shippingFee } = useCartContext();

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
				<button className={styles.totals__loginBtn} type="button">
					LOGIN
				</button>
			</div>
		</div>
	);
};
export default CartTotals;
