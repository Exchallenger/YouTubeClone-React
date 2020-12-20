import React from 'react';

const Navbar = (props) => {

    return(<form className="form">
        <span className="logo">
            <span className="logo__img"></span>
            <span className="logo__name">ExchTube</span>
            <input type="text" className="input" placeholder="Search"></input>
            <button className="btn">Search</button>
        </span>    
    </form>);
};
            

export default Navbar;