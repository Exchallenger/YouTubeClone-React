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



// const Mainpage = (props) => {
//     let [movies,setMovies] = useState('');
//     let movie = async()=> await axios.get('https://yts.mx/api/v2/list_movies.json')
//     .then(setMovies(movie.data.data.movie))
//         return(
//             <>
//                 <h4>{movies}</h4>
//             </>
            
//             );

//         }        
        // const [count, setCount] = useState(0);
        // const increaseItem = () => setCount(count+1)
    const Mainpage = (props) =>{
        let [movies,setMovies] = useState('');
        let movie = async()=> await axios.get('https://yts.mx/api/v2/list_movies.json')
        const showList = () => setMovies(movie);
        return(
            <>
            {count}
            <button onClick={showList}>Show</button>
            </>
        );
    }
        

export default Mainpage;
