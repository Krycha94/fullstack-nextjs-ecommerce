import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import styles from "./Collections.module.scss";

const Collections = () => {
	return (
		<section className={styles.collections}>
			<h2>Discover Collections</h2>
			<div className={styles.collections__container}>
				<div className={styles.collections__content}>
					<h3>Women</h3>
					<Image
						src="/banner-01.jpg"
						alt="Women collection"
						width={520}
						height={220}
					/>
					<Link href="/products">
						SHOP NOW
						<FaSearch />
					</Link>
				</div>
				<div className={styles.collections__content}>
					<h3>Men</h3>
					<Image
						src="/banner-02.jpg"
						alt="Men collection"
						width={520}
						height={220}
					/>
					<Link href="/products">
						SHOP NOW
						<FaSearch />
					</Link>
				</div>
				<div className={styles.collections__content}>
					<h3>Kids</h3>
					<Image
						src="/banner-03.jpg"
						alt="Kids collection"
						width={520}
						height={220}
					/>
					<Link href="/products">
						SHOP NOW
						<FaSearch />
					</Link>
				</div>
			</div>
		</section>
	);
};
export default Collections;
