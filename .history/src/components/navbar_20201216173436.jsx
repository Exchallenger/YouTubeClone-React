import React, {useState} from 'react';

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