"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "../CartIcon/CartIcon";
import MobileNav from "../MobileNav/MobileNav";
import { navLinks } from "@/utils/constants";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleOpen = () => setIsNavOpen(true);
	const handleClose = () => setIsNavOpen(false);

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
					width={80}
					height={40}
					alt="krycha store"
				/>
				<div className={styles.header__container}>
					<CartIcon />
					<button className={styles.header__hamburger} onClick={handleOpen}>
						<FaBars />
					</button>
					<Link href="login" className={styles.header__login}>Login</Link>
				</div>
				<MobileNav isNavOpen={isNavOpen} onClose={handleClose} />
			</div>
		</header>
	);
};
export default Header;
