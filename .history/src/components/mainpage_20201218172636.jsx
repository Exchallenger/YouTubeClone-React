import React, { useState } from 'react';
import axios from 'axios';

const Mainpage = (props) => {
    let [movies,setMovies] = useState();
    
        
    // var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    //   };
      
    //   fetch('https://yts.mx/api/v2/list_movies.json', requestOptions)
    //     .then(response => response.json())
    //     .then(data => setdata(data))
    //     .catch(error => console.log('error', error));
    //     console.log(data);'
    let movie= async()=> await axios.get('https://yts.mx/api/v2/list_movies.json')
    .then(movie = movie => movie.data.data.movie);
    setMovies(movie);
        return(
            <>
                <h1>halo</h1>
            </>
            
            );

        }
        

export default Mainpage;
