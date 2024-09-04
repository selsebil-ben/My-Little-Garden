import CareScale from './CareScale'
import styles from "../app/page.module.css";
import Image from "next/image";

type Item = {
    cover: any;
	name: string;
	water: number;
	light: number;
    price: number;
}

function handleClick(plantName: string) {
	alert(`Do you want to buy a ${plantName} ? Excellent choice 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }: Item) {
	return (
		<li className={styles.lmjplantitem} onClick={() => handleClick(name)}>
			<span className={styles.lmjplantitemprice}>{price}€</span>
			<Image className={styles.lmjplantitemcover} src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
