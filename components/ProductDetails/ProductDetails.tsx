import AddToCart from "../AddToCart/AddToCart";
import ProductImages from "../ProductImages/ProductImages";
import Stars from "../Stars/Stars";
import styles from "./ProductDetails.module.scss";

type ProductDetailsProps = {
	product: any;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
	const {
		name,
		price,
		description,
		stock,
		brand,
		stars,
		reviews,
		discount,
		images,
		category,
	} = product;

	return (
		<div className={styles.product}>
			<ProductImages images={images} />
			<section className={styles.product__details}>
				<p className={styles.product__category}>{category}</p>
				<h2>{name}</h2>
				<Stars stars={stars} reviews={reviews} />
				<h5 className={styles.product__price}>
					{discount ? (
						<>
							<span>${(price * 0.9).toFixed(2)}</span>
							<span className={styles.product__oldPrice}>${price}</span>
						</>
					) : (
						<span>${price}</span>
					)}
				</h5>
				<p className={styles.product__description}>{description}</p>
				<AddToCart product={product} />
				<div className={styles.product__info}>
					<p>
						Available: <span className={styles.product__stock}>{stock}</span>
					</p>
					<p>
						Brand: <span className={styles.product__brand}>{brand}</span>
					</p>
				</div>
			</section>
		</div>
	);
};
export default ProductDetails;
