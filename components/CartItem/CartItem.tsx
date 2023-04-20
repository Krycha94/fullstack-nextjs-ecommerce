import { useCartContext } from "@/context/CartContext";
import Image from "next/image";
import AmountButtons from "../AmountButtons/AmountButtons";
import { FaTimes } from "react-icons/fa";
import CartItemType from "@/types/CartItemType";
import styles from "./CartItem.module.scss";

const CartItem = ({ id, image, name, size, price, amount }: CartItemType) => {
	const { removeFromCart } = useCartContext();

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
			<button
				className={styles.product__deleteBtn}
				onClick={() => removeFromCart(id)}
			>
				<FaTimes />
			</button>
		</article>
	);
};
export default CartItem;
