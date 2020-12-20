import React, {useState} from 'react';
import styles from './navbar.module.css';
//{styles.이름으로 사용하기}
// <div classname = {styles.이름}

const Navbar = (props) => {
    const [count, setCount] = useState(0);
    return(
        <form className={styles.form}>
            <div className={styles.logo}>
                <button className={styles.button}>
                    <i className="fab fa-youtube"></i>
                    <span className={styles.title} >Youtube</span>
                </button>
            </div>
            <div className={styles.search}>
                <input type="text" className={styles.input} placeholder="Search"/>
                <button className={styles.button}><i className="fas fa-search"></i></button>
            </div>
            
        </form>
    );

}
            

export default Navbar;