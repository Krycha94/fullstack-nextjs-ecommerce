import { useCartContext } from "@/context/CartContext";
import Image from "next/image";
import AmountButtons from "../AmountButtons/AmountButtons";
import { FaTimes } from "react-icons/fa";
import CartItemType from "@/types/CartItemType";
import styles from "./CartItem.module.scss";

const CartItem = ({ id, image, name, size, price, amount }: CartItemType) => {
	const { removeFromCart, toggleAmount } = useCartContext();

	const increase = () => {
		toggleAmount(id, "inc");
	};

	const decrease = () => {
		toggleAmount(id, "dec");
	};

	return (
		<article className={styles.product}>
			<div className={styles.product__title}>
				<Image src={image + ".jpg"} alt={name} width={120} height={120} />
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
