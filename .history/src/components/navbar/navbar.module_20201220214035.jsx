import React from 'react';
import styles from './navbar.module.css';
import axios from 'axios';

const Navbar = (props) => {
    const inputRef = React.createRef();
    const onSubmit = () =>{
        const name = inputRef.current.value;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${name}&key=AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI`;
        name&&props.getSearch(url);
    }


    return(<form onSubmit={onSubmit} className={styles.form}>
        <span className={styles.logo}>
            <span className={styles.logo_img}><i className="fab fa-youtube"></i></span>
            <span className={styles.logo_name}>ExchTube</span>
        </span>
        <span className={styles.input_form}>
            <input ref={inputRef} className={styles.input} type="text" placeholder="Search"></input>
            <button className={styles.btn}><i className="fas fa-search"></i></button>
        </span>    
    </form>);
};
            

export default Navbar;