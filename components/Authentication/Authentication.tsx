"use client";

import { useState } from "react";
import styles from "./Authentication.module.scss";
import { useAuthContext } from "@/context/AuthContext";

const Authentication = () => {
	const [isRegister, setIsRegister] = useState(false);
	const { user } = useAuthContext();
	console.log(user);

	return (
		<section className={styles.auth}>
			<form onSubmit={(e) => e.preventDefault()} className={styles.auth__form}>
				<h2 className={styles.auth__title}>
					{isRegister ? "Register" : "Login"}
				</h2>
				{isRegister && (
					<div className={styles.auth__formControl}>
						<label htmlFor="username">Username*</label>
						<input type="text" id="username" name="username" />
					</div>
				)}

				<div className={styles.auth__formControl}>
					<label htmlFor="email">Email*</label>
					<input type="email" id="email" name="email" />
				</div>
				<div className={styles.auth__formControl}>
					<label htmlFor="password">Password*</label>
					<input type="password" id="password" name="password" />
				</div>
				<button type="submit" className={styles.auth__submitBtn}>
					{isRegister ? "Register" : "Login"}
				</button>
				<p className={styles.auth__text}>OR</p>
				{!isRegister && (
					<button type="button" className={styles.auth__googleBtn}>
						Login with Google
					</button>
				)}
				{!isRegister && (
					<button type="button" className={styles.auth__githubBtn}>
						Login with Github
					</button>
				)}
				{isRegister ? (
					<p className={styles.auth__info}>
						Already have an account?
						<button
							type="button"
							onClick={() => setIsRegister((prev) => !prev)}
							className={styles.auth__infoBtn}
						>
							Login
						</button>
					</p>
				) : (
					<p className={styles.auth__info}>
						Don't have an account?
						<button
							type="button"
							onClick={() => setIsRegister((prev) => !prev)}
							className={styles.auth__infoBtn}
						>
							Register
						</button>
					</p>
				)}
			</form>
		</section>
	);
};
export default Authentication;
