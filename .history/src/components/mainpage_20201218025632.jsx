import React, { useState } from 'react';
import axios from 'axios';

const Mainpage = (props) => {
    let [data,setdata] = useState();
    
        
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch('https://yts.mx/api/v2/list_movies.json', requestOptions)
        .then(response => response.json())
        .then(result => {const result = result;})
        .catch(error => console.log('error', error));
        console.log(result);

        return(
            <>
                <h1>halo</h1>
            </>
            
            );

}
        

export default Mainpage;
