import React, {useState} from 'react';
import styles from './navbar.module.css';
//{styles.이름으로 사용하기}
// <div classname = {styles.이름}

const Navbar = (props) => {
    const [count, setCount] = useState(0);
    return(
        <form className={styles.form}>
        <button className={styles.button}><i className="fab fa-youtube"></i></button>
        <span className={styles.title}>Youtube</span>
        <input type="text" className={styles.input}/>
        </form>
    );

}
            

export default Navbar;