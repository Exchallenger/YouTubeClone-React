import React from 'react';

const Mainpage = (props) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
      const URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI";
      fetch(URL, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data.map(data => data.title))
        .then(console.log(data))
        // .then(result => console.log(result.title))
        .catch(error => console.log('error', error));

        return(
            <>
                <h1>halo</h1>
            </>
            
            );

}
        

export default Mainpage;