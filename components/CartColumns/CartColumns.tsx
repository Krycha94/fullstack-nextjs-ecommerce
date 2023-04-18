import styles from "./CartColumns.module.scss";

const CartColumns = () => {
	return (
		<div className={styles.column}>
			<h5>PRODUCT</h5>
			<h5>QUANTITY</h5>
			<h5>SUBTOTAL</h5>
      <span></span>
		</div>
	);
};
export default CartColumns;
