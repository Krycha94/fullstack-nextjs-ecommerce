"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ProductImages.module.scss";

type ProductImagesProps = {
	images: { id: string; url: string }[];
};

const ProductImages = ({ images }: ProductImagesProps) => {
	const [mainImg, setMainImg] = useState(images[2]);

	return (
		<section className={styles.images}>
			<Image
				src={mainImg?.url + ".jpg"}
				alt="product main image"
				width={600}
				height={600}
				className={styles.images__mainImage}
			/>
			<div className={styles.images__gallery}>
				{images?.map((image, index) => (
					<Image
						key={image.id}
						src={image?.url + ".jpg"}
						alt="product alt image"
						width={600}
						height={600}
						onClick={() => setMainImg(images[index])}
						className={`${styles.images__altImage} ${
							mainImg.url === image.url && styles.active
						}`}
					/>
				))}
			</div>
		</section>
	);
};
export default ProductImages;
