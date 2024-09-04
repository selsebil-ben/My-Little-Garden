import { useState, useEffect } from 'react'
import styles from "../app/page.module.css";

function Cart({ cart, updateCart } : any) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc : any, plantType : any) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	return isOpen ? (
		<div className={styles.lmjcart}>
			<button
				className={styles.lmjcarttogglebutton}
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Cart</h2>
					<ul>
						{cart.map(({ name, price, amount } : any, index : any) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button className={styles.otherbutton} onClick={() => updateCart([])}>Clear your Cart</button>
				</div>
			) : (
				<div>Your Cart is empty !</div>
			)}
		</div>
	) : (
		<div className={styles.lmjcartclosed}>
			<button
				className={styles.lmjcarttogglebutton}
				onClick={() => setIsOpen(true)}
			>
				Open the cart
			</button>
		</div>
	)
}

export default Cart
