import React, { useState } from 'react';
import axios from 'axios';


  
        
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
    .then(movie = movie => setMovies(movie.data.data.movie));



const Mainpage = (props) => {
    let [movies,setMovies] = useState();
  
        return(
            <>
                <h4>{setMovies()}</h4>
            </>
            
            );

        }
        

export default Mainpage;
