import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import AmountButtons from "../AmountButtons/AmountButtons";
import styles from "./CartItem.module.scss";

//todo import type
type CartItemProps = any;

const CartItem = ({ id, image, name, size, price, amount }: CartItemProps) => {
	const increase = () => {
		console.log("inc");
	};

	const decrease = () => {
		console.log("dec");
	};

	return (
		<article className={styles.product}>
			<div className={styles.product__title}>
				<Image src={image + ".jpg"} alt={name} width={75} height={75} />
				<div className={styles.product__desc}>
					<h5>{name}</h5>
					<p>Size: {size}</p>
					<h5>${price}</h5>
				</div>
			</div>
			<AmountButtons
				amount={amount}
				increase={increase}
				decrease={decrease}
				cartView
			/>
			<h5>${(price * amount).toFixed(2)}</h5>
			<button className={styles.product__deleteBtn}>
				<FaTimes />
			</button>
		</article>
	);
};
export default CartItem;
