import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'Classic',
		id: '1ed',
		bestSale: true,
		light: 2,
		water: 3,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'Classic',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16
	},

	{
		name: 'Silver Pothos',
		category: 'Classic',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,

		price: 9
	},
	{
		name: 'calathea',
		category: 'Classic',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,

		price: 20
	},
	{
		name: 'Olive tree',
		category: 'Outdoor',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 25
	},

	{
		name: 'cactus',
		category: 'Succulent',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 6
	},
	{
		name: 'basil',
		category: 'Outdoor',
		id: '7ie',
		bestSale: true,
		light: 2,
		water: 3,
		cover: basil,
		price: 5
	},
	{
		name: 'Succulent',
		category: 'Succulent',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8
	},

	{
		name: 'mint',
		category: 'Outdoor',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4
	}
]
