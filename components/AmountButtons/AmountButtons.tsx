import styles from "./AmountButtons.module.scss";
import { FaMinus, FaPlus } from "react-icons/fa";

const AmountButtons = () => {
	return (
		<div className={styles.amountBtns}>
			<button type="button">
				<FaMinus />
			</button>
			<span>5</span>
			<button type="button">
				<FaPlus />
			</button>
		</div>
	);
};
export default AmountButtons;
