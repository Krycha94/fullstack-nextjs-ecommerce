import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<span>© {new Date().getFullYear()} Krycha Store - Build by </span>
			<a href="https://github.com/Krycha94" target={"_blank"}>
				Krystian Kowalski.
			</a>
		</footer>
	);
};
export default Footer;
