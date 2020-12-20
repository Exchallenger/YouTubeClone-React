import React, { useState } from 'react';
import axios from 'axios';

const Mainpage = (props) => {
    let [data,setdata] = useState();
    

        const datas =  axios.get('https://yts.mx/api/v2/list_movies.json');
        console.log(datas.promise);



 
        return(
            <>
                <h1>halo</h1>
            </>
            
            );

}
        

export default Mainpage;