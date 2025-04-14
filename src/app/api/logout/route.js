import { connectDB } from "@/dbConfig/dbConfig"
import { success, error } from "../../../macros/response"

connectDB()

export async function GET() {
    try {
        const response = success({ message: "Logged out successfully", status: 200 })

        response.cookies.set("token", "", { //deleting token from cookies
            httpOnly: true, 
            expires: new Date(0)
        })

        return response

    } catch (err) {
        return error({ message: err.message, status: 400 })
    }
}
