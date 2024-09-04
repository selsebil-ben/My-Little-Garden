import styles from "../app/page.module.css";
import React from 'react';

type BannerProps = {
    children: React.ReactNode;
}
function Banner({ children } : BannerProps ) {
	return <div className={styles.lmjbanner}>{children} </div>
}

export default Banner
