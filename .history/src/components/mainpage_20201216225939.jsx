import React from 'react';

const Mainpage = (props) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
      
      fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(console.log(result.title))
        .catch(error => console.log('error', error));

        return(
            <>
                <h1>halo</h1>
            </>
            
            );

}
        

export default Mainpage;