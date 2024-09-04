import { Dispatch, SetStateAction, useState } from 'react'
//import { plantList } from '../datas/plantList'
import { plantList} from '../datas/plantList';
import PlantItem from './PlantItem'
import Categories from './Categories'
import styles from "../app/page.module.css";



type CartItem = {
    name: string;
    price: number;
    amount: number;
}

type ShoppingListProps = {
    cart: CartItem[];
    updateCart: Dispatch<SetStateAction<CartItem[]>>;
	
}

function ShoppingList({ cart, updateCart }: ShoppingListProps) {
	
	const [activeCategory, setActiveCategory] = useState('')
	const categories: string[] = plantList.reduce<string[]>(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	);

	function addToCart(name : string, price : number) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className={styles.lmjshoppinglist}>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className={styles.lmjplantlist}>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button className={styles.greenbutton} onClick={() => addToCart(name, price)}>Add to Cart</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
