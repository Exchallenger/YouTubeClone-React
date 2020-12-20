import React, {useState} from 'react';
import styles from './navbar.module.css';
//{styles.이름으로 사용하기}
// <div classname = {styles.이름}

const Navbar = (props) => {
    const [count, setCount] = useState(0);
    return(
        <>
        <button className="youtube__logo"><i class="fab fa-youtube"></i></button>
        <span>Hello i'm Judy</span>
        </>
    );

}
            

export default Navbar;