//config.js
import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://ohnpol.herokuapp.com/api/"
})

