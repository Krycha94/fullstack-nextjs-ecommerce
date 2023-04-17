import Link from "next/link";
import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
	return (
		<>
			<section className={styles.about}>
				<div className={styles.about__overlay}></div>
				<div className={styles.about__content}>
					<p>NEW COLLECTION</p>
					<p>Be different in your own way!</p>
					<p>Find your unique style.</p>
					<Link href="/products">Shop Collection</Link>
				</div>
			</section>
			<section className={styles.story}>
				<Image
					src="/collection-01.jpg"
					alt="Woman model"
					width={590}
					height={690}
				/>
				<article className={styles.story__content}>
					<h2>About</h2>
					<p>
						Krycha Store is a great spot to find classic, timeless pieces for
						men, women and kids. From comfy joggers and denim jeans to stylish
						blouses and dress shirts, you'll find everything you need for a
						polished wardrobe.
					</p>
				</article>
			</section>
		</>
	);
};
export default About;
