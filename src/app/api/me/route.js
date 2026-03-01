import { error, success } from "../../../macros/response"
import User from "../../../models/user"


export async function POST(req) {
    try {
        const requestBody = await req.json()
        console.log('========================me: requestBody========================')
        console.log(requestBody)
        console.log('====================================================================')
    
        const user = await User.findOne({ email: requestBody.email })

        if (!user) {
            return error({ message: 'User not found!', status: 400 })
        }

        return success({ data: user, status: 200 })
    } catch (err) {
        return error({ message: err.message, status: 400 })
    }
}