import axios from 'axios';

axios.defaults.crossDomain = true;

export default axios.create({
    baseURL: `http://localhost:8010/api/v1/`
});