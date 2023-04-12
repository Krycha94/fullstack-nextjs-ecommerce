import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__container}>
				<div className={styles.hero__content}>
					<h2>#NEW SUMMER COLLECTION 2023</h2>
					<h1>ARRIVALS SALES</h1>
					<Link href="/products">Shop Now</Link>
				</div>
				<div className={styles.hero__img}>
					<Image
						src="/woman-model.png"
						alt="Woman model"
						width={350}
						height={700}
					/>
				</div>
			</div>
		</section>
	);
};
export default Hero;
