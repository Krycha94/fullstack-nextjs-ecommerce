import { useState } from "react";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./UserPanel.module.scss";

const UserPanel = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user, logout } = useAuthContext();

	const handleLogout = () => {
		setIsOpen(false);
		logout();
	};

	return (
		<div className={styles.user}>
			{!user ? (
				<Link href="auth" className={styles.user__login}>
					Login
				</Link>
			) : (
				<div className={styles.user__container}>
					<div
						className={styles.user__panel}
						onClick={() => setIsOpen((prev) => !prev)}
					>
						<img
							src={user?.photoURL || "/default.png"}
							alt="profile pic"
							className={styles.user__img}
						/>
						<p className={styles.user__name}>
							{user?.displayName?.split(" ")[0] || user?.email}
						</p>
						<button className={styles.user__menuBtn}>
							{isOpen ? <FiChevronUp /> : <FiChevronDown />}
						</button>
					</div>
					{isOpen && (
						<button
							type="button"
							onClick={handleLogout}
							className={styles.user__logoutBtn}
						>
							Logout
						</button>
					)}
				</div>
			)}
		</div>
	);
};
export default UserPanel;
