import { useState } from 'react'
import styles from "../app/page.module.css";

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e : any) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className={styles.lmjfooter}>
			<div className={styles.lmjfooterelem}>
			For plant enthusiasts 🌿🌱🌵
			</div>
			<div className={styles.lmjfooterelem}>Leave us your email : </div>
			<input
				placeholder='Type your email here'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer
