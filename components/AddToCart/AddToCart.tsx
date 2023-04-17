import AmountButtons from "../AmountButtons/AmountButtons";
import styles from "./AddToCart.module.scss";

type AddToCartProps = {
	product: any;
};

const AddToCart = ({ product }: AddToCartProps) => {
	const { id, stock, size } = product;

	return (
		<div>
			<div className={styles.size}>
				<span>Size</span>
				<div>
					{size?.map((s: string, index: number) => (
						<button key={index}>{s}</button>
					))}
				</div>
			</div>
			<div className={styles.btns}>
				<AmountButtons />
				<button>Add to cart</button>
			</div>
		</div>
	);
};
export default AddToCart;
