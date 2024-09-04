"use client" ;

import Image from "next/image";
import { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import logo from '../assets/logo.png'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
import ShoppingList from '../components/ShoppingList'
import styles from "./page.module.css";




function App() {





	/*const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	*/

	
	const [cart, updateCart] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);
	return (
		<div className={styles.body}>
			<Banner>
				<Image
				src={logo}
				alt="Logo"
				className={styles.lmjlogo}
				/>

				 {/*<img src={logo} alt='logo-la-maison-jungle' className={styles.lmjlogo} /> */}

				<h1 className={styles.lmjtitle}>Welcome to Abdou Jungle</h1>
			</Banner>
			<div className={styles.lmjlayoutinner}>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
