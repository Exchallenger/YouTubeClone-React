import React from 'react';
import styles from './navbar.module.css'

const Navbar = () => {

    return(<form className={styles.form}>
        <span className={styles.logo}>
            <span className={styles.logo_img}><i className="fab fa-youtube"></i></span>
            <span className={styles.logo_name}>ExchTube</span>
            <span className={styles.input_form}>
                    <input className={styles.input} type="text" placeholder="Search"></input>
                    <button className={styles.btn}><i className="fas fa-search"></i></button>
            </span>

        </span>    
    </form>);
};
            

export default Navbar;