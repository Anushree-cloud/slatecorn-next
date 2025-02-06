import { connectDB } from '../../../dbConfig/dbConfig'
import { success, error } from '../../../macros/response'
import User from '../../../models/user'
import bcrypt from 'bcrypt'
import { EMAIL_SUBJECT, EMAIL_TYPE, verifyMailHTML } from '../../../constants/mailer'
import { sendMail } from '../../../utils/mailer'

connectDB()

export async function POST(req) {
	try {
        const requestBody = await req.json()
        console.log('========================signup: requestBody========================')
        console.log(requestBody)
        console.log('====================================================================')
    
        const userData = await User.findOne({ email: requestBody.email })
        if (userData) {
            return error({ message: 'User already exists!', status: 400 })
        }
    
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(requestBody.password, salt)
    
        const newUser = new User({ ...requestBody, password: hashedPassword })
        const newUserData = await newUser.save()
    
        console.log('========================signup: newUser========================')
        console.log(newUserData)
        console.log('====================================================================')
    
        const html = verifyMailHTML.replace('[USER_NAME]', newUserData.name)
        await sendMail(
            newUserData.email,
            EMAIL_SUBJECT.VERIFY,
            html,
            EMAIL_TYPE.VERIFY,
            newUserData._id
        )
    
        return success({ 
            message: 'User created successfully!', 
            data: newUserData,
            status: 200
        })
    } catch (err) {
        console.log("================Error while creating user!==============")
        console.log(err)
        console.log("========================================================")
        return error({ message: err.message, status: 400 })
    }
}
