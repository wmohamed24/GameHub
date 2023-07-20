import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '3fe917945a2541fba022407e62f8a95d'
    }
})