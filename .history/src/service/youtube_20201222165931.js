// import axios from 'axios';

// class Youtube{
//     constructor{key}{
//         this.key = key;
//     }

//     mostPopular() {
//         key = 'AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI';
//         return axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&type=video&key=${key}`)
//         .then(result => result.data.items);
//     };
// }

//     export default Youtube;

import axios from 'axios';

class Youtube{
    constructor(key){
        this.key = key;
    }
    mostPopular(){
        key = 'AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI';
        return axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&type=video&key=${key}`)
        .then(console.log(result));
    }
}

export default Youtube;