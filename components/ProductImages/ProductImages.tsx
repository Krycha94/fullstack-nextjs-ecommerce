import styles from "./ProductImages.module.scss";

type ProductImagesProps = {
	images: { id: string; url: string }[];
};

const ProductImages = ({ images }: ProductImagesProps) => {
	return <div>ProductImages</div>;
};
export default ProductImages;
