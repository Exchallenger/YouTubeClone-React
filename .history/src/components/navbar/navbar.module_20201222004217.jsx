import React, { useRef } from 'react';
import styles from './navbar.module.css';

const Navbar = ({onSearch}) => {
    const inputRef = useRef();
    const onSubmit = (event) =>{
        event.preventDefault();
        const name = inputRef.current.value;
        const key = process.env.REACT_APP_YOUTUBE_API_KEY;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${name}&key=${key}`;
        onSearch(url);
  
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