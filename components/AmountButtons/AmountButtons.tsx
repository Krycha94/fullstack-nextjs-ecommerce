import styles from "./AmountButtons.module.scss";
import { FaMinus, FaPlus } from "react-icons/fa";

type AmountButtonsProps = {
	amount: number;
	increase: () => void;
	decrease: () => void;
	cartView?: boolean;
};

const AmountButtons = ({
	amount,
	increase,
	decrease,
	cartView,
}: AmountButtonsProps) => {
	return (
		<div className={`${styles.amountBtns} ${cartView && styles.cartView}`}>
			<button type="button" onClick={decrease} aria-label="Minus">
				<FaMinus />
			</button>
			<span>{amount}</span>
			<button type="button" onClick={increase} aria-label="Plus">
				<FaPlus />
			</button>
		</div>
	);
};
export default AmountButtons;
