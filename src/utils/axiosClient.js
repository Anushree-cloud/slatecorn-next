import axios from "axios"

const axiosClient = axios.create({
    baseURL: process.env.API_URL,
})

export const getRequest = async (url, config = {}) => {
    try {
        const response = await axiosClient.get(url, config)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const postRequest = async (url, data, config = {}) => {
    try {
        const response = await axiosClient.post(url, data, config)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const putRequest = async (url, data, config = {}) => {
    try {
        const response = await axiosClient.put(url, data, config)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const deleteRequest = async (url, config = {}) => {
    try {
        const response = await axiosClient.delete(url, config)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            window.location.href = "/api/auth/login"
        }
        return Promise.reject(error)
    }
)

export default axiosClient