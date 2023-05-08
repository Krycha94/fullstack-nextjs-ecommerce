import styles from "./Error.module.scss";

const Error = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.error}>{children}</div>;
};
export default Error;
