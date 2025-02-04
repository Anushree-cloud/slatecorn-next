
import "@/libs/mongodb/connection"
import User from "@/models/user"
import {success, error} from "@/macros/response"

// await connectDB()

export async function GET() {
    try {
        const user = await User.find()
        // console.log("====================================================================")
        // console.log("user", user)
        // console.log("====================================================================")
        return success({ data: user })
    } catch (error) {
        return error({ data: error })
    }
}