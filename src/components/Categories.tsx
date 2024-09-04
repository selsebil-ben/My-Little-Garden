import styles from "../app/page.module.css";

function Categories({ setActiveCategory, categories, activeCategory }: any) {
	return (
		<div className={styles.lmjcategories}>
			<h4>Select a category</h4>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className={styles.lmjcategoriesselect}
			>
				<option value=''>---</option>
				{categories.map((cat : any) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			{/* <button  className={styles.otherbutton} onClick={() => setActiveCategory('')}>Reset Category</button> */}
			<button 
			type="button" 
			className="btn btn-warning text-white"
			onClick={() => setActiveCategory('')}>
				Reset Category 
			</button> 
		</div>
	)
}

export default Categories
