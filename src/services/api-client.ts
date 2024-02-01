import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fe8b035e792c4effae42d4a3c368faad'
    }
})