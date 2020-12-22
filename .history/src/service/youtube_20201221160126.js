import axios from 'axios';

class youtube{
    constructor{key}{
        this.key = key;
    }

    mostPopular() {
        return axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&type=video&key=AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI")
        .then(result => result.data.items);
    };
    Search(url){
            return axios.get(url)
            .then(items=>(items.data.items))
        };
    }
