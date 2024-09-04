import { useState, useEffect } from 'react'
import styles from "../app/page.module.css";

function Cart({ cart, updateCart } : any) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc : any, plantType : any) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `MLG: ${total}€ in cart`
	}, [total])

	return isOpen ? (
		<div className={styles.lmjcart}>
			
            {/* className={styles.lmjcarttogglebutton} */}
			<button 
			type="button" 
			className="btn btn-warning  "
			
			onClick={() => setIsOpen(false)}
			>
				<i className="fas fa-shopping-cart"></i>
				<br/>
				Close 
			</button> 
			<br/> <br/>
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
				<div >Your Cart is empty !</div>
			)}
		</div>
	) : (
		<div className={styles.lmjcartclosed}>
			<button
				
				
			
				
				
			type="button" 
			className="btn btn-success"
			
			onClick={() => setIsOpen(true)}>
				 <i className="fas fa-shopping-cart"></i>
				 <br/> 
				Open
			</button> 
		</div>
	)
}

export default Cart
