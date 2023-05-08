"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import CartIcon from "../CartIcon/CartIcon";
import MobileNav from "../MobileNav/MobileNav";
import UserPanel from "../UserPanel/UserPanel";
import { navLinks } from "@/utils/constants";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const { user, isLoading } = useAuthContext();
	const path = usePathname();

	const handleOpen = () => setIsNavOpen(true);
	const handleClose = () => setIsNavOpen(false);

	return (
		<header
			className={`${styles.header} ${
				!user && isLoading ? styles.loading : styles.loaded
			}`}
		>
			<div className={styles.header__center}>
				<nav className={styles.header__nav}>
					{navLinks.map((link) => (
						<Link
							href={link.url}
							key={link.id}
							className={`${link.url === path && styles.active}`}
						>
							{link.text}
						</Link>
					))}
				</nav>
				<Link href="/">
					<Image
						src="/cloth-logo.png"
						width={80}
						height={40}
						alt="krycha store"
						className={styles.header__logoImg}
					/>
				</Link>
				<div className={styles.header__container}>
					<CartIcon />
					<button className={styles.header__hamburger} onClick={handleOpen}>
						<FaBars />
					</button>
					<UserPanel />
				</div>
				<MobileNav isNavOpen={isNavOpen} onClose={handleClose} />
			</div>
		</header>
	);
};
export default Header;
