import React, { useState } from 'react';
import axios from 'axios';

const Mainpage = (props) => {
    let [data,setdata] = useState();
    
        
        const getData = async () =>{
            const datas =  await axios.get('https://yts.mx/api/v2/list_movies.json');
            console.log(datas);
        }
        getData;
 
        return(
            <>
                <h1>halo</h1>
            </>
            
            );

}
        

export default Mainpage;
