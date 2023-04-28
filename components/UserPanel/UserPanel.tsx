import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import styles from "./UserPanel.module.scss";

const UserPanel = () => {
	const { user, logout } = useAuthContext();

	return (
		<div className={styles.user}>
			{!user ? (
				<Link href="auth" className={styles.user__login}>
					Login
				</Link>
			) : (
				<>
					<p>{user?.displayName || user?.email}</p>
					<img src={user?.photoURL || ""} alt="profile pic" />
					<button type="button" onClick={logout}>
						Logout
					</button>
				</>
			)}
		</div>
	);
};
export default UserPanel;
