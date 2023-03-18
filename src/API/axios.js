import axios from 'axios';
axios.defaults.withCredentials = false 

const baseURL = "https://openlibrary.org/";
const instance = axios.create({
    baseURL: baseURL
});
// console.log(process.env)
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

export default instance;
