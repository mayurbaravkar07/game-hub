import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',

    params: {
        key: '798163ae40aa454caa9c989ce1b10da2'
    }
})