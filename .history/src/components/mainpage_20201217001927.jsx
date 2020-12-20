import React, { useState } from 'react';

const Mainpage = (props) => {
    let [data,setdata] = useState('');
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
      const URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI";
        let response = await fetch(URL);
        if (response.ok){
            let json = await response.json();
            console.log(json);
        }else{
            alert(`HTTP-Error ${response.status}`);
        }

        return(
            <>
                <h1>halo</h1>
            </>
            
            );

}
        

export default Mainpage;