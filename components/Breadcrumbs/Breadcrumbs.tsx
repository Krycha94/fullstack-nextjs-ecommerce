import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

type BreadcrumbsProps = {
	title: string;
	product?: boolean;
};

const Breadcrumbs = ({ title, product }: BreadcrumbsProps) => {
	return (
		<section className={styles.breadcrumbs}>
			<div className={styles.breadcrumbs__container}>
				<h3>{title}</h3>
				<span>
					<Link href="/">Home / </Link>
					{product && <Link href="/products">Products /</Link>} {title}
				</span>
			</div>
		</section>
	);
};
export default Breadcrumbs;
