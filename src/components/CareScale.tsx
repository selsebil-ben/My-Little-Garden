import { Anybody } from 'next/font/google'
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
import Image from "next/image";

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel:any = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }: any) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<Image src={Sun} alt='sun-icon' />
		) : (
			<Image src={Water} alt='water-icon' />
		)

	return (
		
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
