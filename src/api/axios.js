import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params  : {
        api_key : "63789f62f309154f6b201001174a37a1",
        language : "ko-KR",
    },  
});

export default instance;