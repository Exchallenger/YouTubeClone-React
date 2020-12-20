import React, { useState } from 'react';

const Mainpage = (props) => {
    let [data,setdata] = useState('');

        const URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI";
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(URL, requestOptions)
            .then(response => response.json())
            .then(console.log(json()))
            .catch(error => console.log('error', error));
        console.log(data);

        return(
            <>
                <h1>halo</h1>
            </>
            
            );

}
        

export default Mainpage;