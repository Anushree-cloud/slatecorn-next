import { connectDB } from '../../../dbConfig/dbConfig'
import { success, error } from '../../../macros/response'
import User from '../../../models/user'

connectDB()

export async function POST(req) {
    try {
        const requestBody = await req.json()
        console.log('========================verifyemail: requestBody========================')
        console.log(requestBody)
        console.log('====================================================================')
    
        const user = await User.findOne({ 
            verifyToken: requestBody.token,
        })

        if(!user) {
            return error({ message: 'Invalid token!', status: 400 })
        }

        if(user.isVerified) {
            return error({ message: 'User already verified!', status: 400 })
        }

        if(user.verifyTokenExpiry < Date.now()) {
            return error({ message: 'Token expired!', status: 400 })
        }

        user.isVerified = true
        await user.save()

        return success({ message: 'User verified successfully!', status: 200 })
    } catch (err) {
        return error({ message: err.message, status: 400 })
    }
}