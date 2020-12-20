import React, {useState} from 'react';

const Navbar = (props) => {
    const [count, setCount] = useState(0);
    return(
        <>
        <a className="youtube__logo"><i class="fab fa-youtube"></i></a>
        <span>Hello i'm Judy</span>
        </>
    );

}
            

export default Navbar;