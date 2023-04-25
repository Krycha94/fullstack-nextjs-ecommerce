import Link from "next/link";
import styles from "./UserPanel.module.scss"

const UserPanel = () => {
	return (
		<div className={styles.user}>
			<Link href="auth" className={styles.user__login}>
				Login
			</Link>
		</div>
	);
};
export default UserPanel;
