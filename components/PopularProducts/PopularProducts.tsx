"use client";

import { motion } from "framer-motion";
import Product from "../Product/Product";
import ProductType from "@/types/ProductType";
import styles from "./PopularProducts.module.scss";

type PopularProductsProps = {
	products: ProductType[];
};

const PopularProducts = ({ products }: PopularProductsProps) => {
	//framer motion
	const list = {
		hidden: {
			x: -50,
			y: -50,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: "tween",
				delay: 0.2,
				duration: 1,
			},
		},
	};

	return (
		<section className={styles.products}>
			<h2>Popular Products</h2>
			<motion.div
				variants={list}
				initial="hidden"
				whileInView="show"
				className={styles.products__container}
			>
				{products.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</motion.div>
		</section>
	);
};
export default PopularProducts;
