import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import styles from "./Stars.module.scss";

type StarsProps = {
	stars: number;
	reviews?: number;
};

const Stars = ({ stars, reviews }: StarsProps) => {
	const newStars = Array.from({ length: 5 }, (_, index) => {
		const number = index + 0.5;
		return (
			<span key={index}>
				{stars >= index + 1 ? (
					<BsStarFill />
				) : stars >= number ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
		);
	});

	return (
		<>
			<div className={styles.stars}>{newStars}</div>
			{reviews && <p className={styles.reviews}>({reviews} reviews)</p>}
		</>
	);
};
export default Stars;
