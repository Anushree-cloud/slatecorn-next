import { postRequest } from "../utils/axiosClient"

export const login = async (payload) => {
    return postRequest("/api/login", payload)
}