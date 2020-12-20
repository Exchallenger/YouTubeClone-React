import React, { useState } from 'react';
import axios from 'axios';

const Mainpage = (props) => {
    let [data,setdata] = useState();
    
    getdata = async() =>{
        const data =  await axios.get('https://yts.mx/api/v2/list_movies.json');
        console.log(data);
    }


 
        return(
            <>
                <h1>halo</h1>
            </>
            
            );

}
        

export default Mainpage;