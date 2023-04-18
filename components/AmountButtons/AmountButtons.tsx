import styles from "./AmountButtons.module.scss";
import { FaMinus, FaPlus } from "react-icons/fa";

type AmountButtonsProps = {
	amount: number;
	increase: () => void;
	decrease: () => void;
};

const AmountButtons = ({ amount, increase, decrease }: AmountButtonsProps) => {
	return (
		<div className={styles.amountBtns}>
			<button type="button" onClick={decrease}>
				<FaMinus />
			</button>
			<span>{amount}</span>
			<button type="button" onClick={increase}>
				<FaPlus />
			</button>
		</div>
	);
};
export default AmountButtons;
