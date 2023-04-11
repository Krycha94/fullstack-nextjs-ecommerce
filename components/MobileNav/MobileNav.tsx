import Link from "next/link";
import { navLinks } from "@/utils/constants";
import { FaTimes } from "react-icons/fa";
import styles from "./MobileNav.module.scss";

type MobileNavProps = {
	isNavOpen: boolean;
	onClose: () => void;
};

const MobileNav = ({ isNavOpen, onClose }: MobileNavProps) => {
	return (
		<>
			<div
				className={`${styles.backdrop} ${isNavOpen && styles.visible}`}
				onClick={onClose}
			></div>
			<aside className={`${styles.sidebar} ${isNavOpen && styles.visible}`}>
				<button className={styles.sidebar__button} onClick={onClose}>
					<FaTimes />
				</button>
				<nav className={styles.sidebar__nav}>
					{navLinks.map((link) => (
						<Link href={link.url} key={link.id}>
							{link.text}
						</Link>
					))}
					<Link href="login">Login</Link>
				</nav>
			</aside>
		</>
	);
};
export default MobileNav;
