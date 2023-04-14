import Image from "next/image";
import styles from "./Product.module.scss";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Product = ({ id, images, name, price }: any) => {
	return (
		<article className={styles.product}>
			<div className={styles.product__container}>
				<Image
					src={images[2].url}
					alt={name}
					width={500}
					height={500}
					className={styles.product__image}
				/>
				<Link href={`/products/${id}`} className={styles.product__link}>
					Quick View
				</Link>
			</div>
			<footer className={styles.product__footer}>
				<div className={styles.product__title}>
					<h4>
						<Link
							href={`/products/${id}`}
							className={styles.product__titleLink}
						>
							{name}
						</Link>
					</h4>
					<BiHeart />
				</div>
				<div className={styles.product__stars}>
					<BsStarFill />
					<BsStarHalf />
					<BsStar />
				</div>
				<p className={styles.product__price}>${price}</p>
			</footer>
		</article>
	);
};
export default Product;
