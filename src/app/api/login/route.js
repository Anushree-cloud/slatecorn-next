import { error, success } from "../../../macros/response";
import User from "../../../models/user";
import { connectDB } from "@/dbConfig/dbConfig"

connectDB()

export async function POST(req) {
    try {
        const requestBody = await req.json()
        console.log('========================login: requestBody========================')
        console.log(requestBody)
        console.log('====================================================================')
    
        const user = await User.findOne({ email: requestBody.email })
        console.log('15=>',user)
        if (!user) {
            const response = error({ message: 'User not found!', status: 400 })
            console.log('17=>',response)
            return response
        }

        const isPasswordCorrect = await bcrypt.compare(requestBody.password, user.password)

        if(!isPasswordCorrect) {
            return error({ message: 'Invalid credentials!', status: 400 })
        }

        const tokenPayload = {
            id: user._id,
        }

        const token = await jwt.sign(
            tokenPayload, 
            process.env.JWT_SECRET, {
            expiresIn: '1d'
        })

        const response = success({
            message: 'User logged in successfully!', 
            status: 200
        })

        response.cookies.set('token', token, {
            httpOnly: true,
        })

        return response

    } catch (err) {
        return error({ message: err.message, status: 400 })
    }
}