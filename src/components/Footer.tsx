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
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className={styles.lmjfooterelem}>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer
