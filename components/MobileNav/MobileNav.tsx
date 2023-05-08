import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { navLinks } from "@/utils/constants";
import { FaTimes } from "react-icons/fa";
import styles from "./MobileNav.module.scss";

type MobileNavProps = {
	isNavOpen: boolean;
	onClose: () => void;
};

const MobileNav = ({ isNavOpen, onClose }: MobileNavProps) => {
	const { user, logout } = useAuthContext();
	const path = usePathname();

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
						<Link
							href={link.url}
							key={link.id}
							onClick={onClose}
							className={`${link.url === path && styles.active}`}
						>
							{link.text}
						</Link>
					))}
					{!user ? (
						<Link href="auth" onClick={onClose}>
							Login
						</Link>
					) : (
						<div className={styles.sidebar__user}>
							<img
								src={user?.photoURL || "/default.png"}
								alt="profile pic"
								className={styles.sidebar__userImg}
							/>
							<p className={styles.sidebar__userName}>
								{user?.displayName || user?.email}
							</p>
							<button
								type="button"
								onClick={() => {
									logout();
									onClose();
								}}
								className={styles.sidebar__logoutBtn}
							>
								Logout
							</button>
						</div>
					)}
				</nav>
			</aside>
		</>
	);
};
export default MobileNav;
