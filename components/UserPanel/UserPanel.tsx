import { useState } from "react";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./UserPanel.module.scss";

const UserPanel = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user, logout } = useAuthContext();

	return (
		<div className={styles.user}>
			{!user ? (
				<Link href="auth" className={styles.user__login}>
					Login
				</Link>
			) : (
				<div className={styles.user__container}>
					<div className={styles.user__panel}>
						<img
							src={user?.photoURL || ""}
							alt="profile pic"
							className={styles.user__img}
						/>
						<p className={styles.user__name}>
							{user?.displayName || user?.email}
						</p>
						<button
							onClick={() => setIsOpen((prev) => !prev)}
							className={styles.user__menuBtn}
						>
							{isOpen ? <FiChevronUp /> : <FiChevronDown />}
						</button>
					</div>
					{isOpen && (
						<button
							type="button"
							onClick={logout}
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
