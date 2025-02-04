import { getRequest, postRequest } from "@/utils/axiosClient"

export const getLoggedInUser = async (payload) => {
    return postRequest("/api/auth/me", payload)
}