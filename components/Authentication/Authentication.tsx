"use client";

import { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import styles from "./Authentication.module.scss";

const initialUser = {
	username: "",
	email: "",
	password: "",
};

const Authentication = () => {
	const [enteredUser, setEnteredUser] = useState(initialUser);
	const [isRegister, setIsRegister] = useState(false);
	const { register, login, updateUser, loginWithGoogle, loginWithGithub } =
		useAuthContext();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEnteredUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			(isRegister && !enteredUser.username) ||
			!enteredUser.email ||
			!enteredUser.password
		) {
			console.log("puste");
			return;
		}

		if (isRegister) {
			await register(enteredUser.email, enteredUser.password);
			await updateUser(enteredUser.username);
		} else {
			login(enteredUser.email, enteredUser.password);
		}
	};

	const toggleRegister = () => {
		setIsRegister((prev) => !prev);
		setEnteredUser(initialUser);
	};

	return (
		<section className={styles.auth}>
			<form onSubmit={handleSubmit} className={styles.auth__form}>
				<h2 className={styles.auth__title}>
					{isRegister ? "Register" : "Login"}
				</h2>
				{isRegister && (
					<div className={styles.auth__formControl}>
						<label htmlFor="username">Username*</label>
						<input
							type="text"
							id="username"
							name="username"
							value={enteredUser.username}
							onChange={handleChange}
						/>
					</div>
				)}

				<div className={styles.auth__formControl}>
					<label htmlFor="email">Email*</label>
					<input
						type="email"
						id="email"
						name="email"
						value={enteredUser.email}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.auth__formControl}>
					<label htmlFor="password">Password*</label>
					<input
						type="password"
						id="password"
						name="password"
						value={enteredUser.password}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" className={styles.auth__submitBtn}>
					{isRegister ? "Register" : "Login"}
				</button>
				<p className={styles.auth__text}>OR</p>
				{!isRegister && (
					<button
						type="button"
						onClick={loginWithGoogle}
						className={styles.auth__googleBtn}
					>
						Login with Google
					</button>
				)}
				{!isRegister && (
					<button
						type="button"
						onClick={loginWithGithub}
						className={styles.auth__githubBtn}
					>
						Login with Github
					</button>
				)}
				{isRegister ? (
					<p className={styles.auth__info}>
						Already have an account?
						<button
							type="button"
							onClick={toggleRegister}
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
							onClick={toggleRegister}
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
