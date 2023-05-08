import styles from "./Loading.module.scss";

const Loading = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.loading}>{children}</div>;
};
export default Loading;
