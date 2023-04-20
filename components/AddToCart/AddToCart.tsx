"use client";

import { useState } from "react";
import { useCartContext } from "@/context/CartContext";
import AmountButtons from "../AmountButtons/AmountButtons";
import ProductType from "@/types/ProductType";
import styles from "./AddToCart.module.scss";

type AddToCartProps = {
	product: ProductType;
};

const AddToCart = ({ product }: AddToCartProps) => {
	const { addToCart } = useCartContext();
	const { id, stock, size } = product;
	const [mainSize, setMainSize] = useState(size[0]);
	const [amount, setAmount] = useState(1);

	const increase = () => {
		setAmount((prev) => {
			let tempAmount = prev + 1;
			if (tempAmount > stock) {
				tempAmount = stock;
			}
			return tempAmount;
		});
	};

	const decrease = () => {
		setAmount((prev) => {
			let tempAmount = prev - 1;
			if (tempAmount < 1) {
				tempAmount = 1;
			}
			return tempAmount;
		});
	};

	return (
		<section>
			<div className={styles.size}>
				<span className={styles.size__title}>Size</span>
				<div className={styles.size__container}>
					{size?.map((s, index) => (
						<button
							key={index}
							className={`${styles.size__btn} ${
								mainSize === s && styles.active
							}`}
							onClick={() => setMainSize(s)}
						>
							{s}
						</button>
					))}
				</div>
			</div>
			<div className={styles.btnContainer}>
				<AmountButtons
					amount={amount}
					increase={increase}
					decrease={decrease}
				/>
				<button
					onClick={() => addToCart(id, mainSize, amount, product)}
					className={styles.btnContainer__btn}
				>
					Add to cart
				</button>
			</div>
		</section>
	);
};
export default AddToCart;
