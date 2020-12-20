import React from 'react';
import styles from './video_item.module.css'

const Navbar = (props) => {

    return(<form className={styles.form}>
        <span className={styles.logo}>
            <span className={styles.logo_img}></span>
            <span className={styles.logo_name}>ExchTube</span>
            <input type="text" className="input" placeholder="Search"></input>
            <button className={styles.btn}><i class="fas fa-search"></i></button>
        </span>    
    </form>);
};
            

export default Navbar;