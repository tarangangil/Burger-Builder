import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-t.firebaseio.com/'
});
export default instance;