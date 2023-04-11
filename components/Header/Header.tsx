import Image from "next/image";
import CartIcon from "../CartIcon/CartIcon";
import { navLinks } from "@/utils/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__center}>
				<nav className={styles.header__nav}>
					{navLinks.map((link) => (
						<Link href={link.url} key={link.id}>
							{link.text}
						</Link>
					))}
				</nav>
				<Image
					src="/cloth-logo.png"
					width={100}
					height={50}
					alt="krycha store"
				/>
				<div className={styles.header__container}>
					<CartIcon />
					<button className={styles.header__hamburger}>
						<RxHamburgerMenu />
					</button>
					<button className={styles.header__loginBtn}>Login</button>
				</div>
			</div>
		</header>
	);
};
export default Header;
