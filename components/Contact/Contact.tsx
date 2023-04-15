"use client";

import Socials from "../Socials/Socials";
import styles from "./Contact.module.scss";

const Contact = () => {
	return (
		<section className={styles.contact}>
			<div className={styles.contact__container}>
				<h3>Subscribe To Get Offers In Your Inbox</h3>
				<form
					className={styles.contact__form}
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						type="email"
						name="email"
						placeholder="Your email address..."
					/>
					<button type="submit">Subscribe</button>
				</form>
				<Socials />
			</div>
		</section>
	);
};
export default Contact;
