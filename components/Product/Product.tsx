import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import ProductType from "@/types/ProductType";
import styles from "./Product.module.scss";
import Stars from "../Stars/Stars";

const Product = ({
	id,
	images,
	name,
	price,
	discount,
	stars,
}: ProductType) => {
	return (
		<article className={styles.product}>
			<div className={styles.product__container}>
				<Image
					src={images[2].url + ".jpg"}
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
				<Stars stars={stars} />
				<p className={styles.product__price}>
					{discount ? (
						<>
							<span>${(price * 0.9).toFixed(2)}</span>
							<span className={styles.product__oldPrice}>${price}</span>
						</>
					) : (
						<span>${price}</span>
					)}
				</p>
			</footer>
		</article>
	);
};
export default Product;
