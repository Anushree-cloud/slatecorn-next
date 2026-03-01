import { connectDB } from '../../../dbConfig/dbConfig'
import { success, error } from '../../../macros/response'
import User from '../../../models/user'
import bcrypt from 'bcrypt'
import { EMAIL_SUBJECT, verifyMailHTML } from '../../../constants/mailer'
import { sendMail } from '../../../utils/mailer'
import { v4 as uuid } from 'uuidv4'

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

        const verificationToken = await bcrypt.hash(uuid(), 10)
    
        const newUser = new User({ 
            ...requestBody, 
            password: hashedPassword,
            verifyToken: verificationToken,
            verifyTokenExpiry: Date.now() + 3600000 //token set for one hour
        })
        const newUserData = await newUser.save()
    
        console.log('========================signup: newUser========================')
        console.log(newUserData)
        console.log('====================================================================')
    
        let html = verifyMailHTML.replace('[USER_NAME]', newUserData.name)
        html = html.replace('[VERIFICATION_LINK]', `${process.env.DOMAIN}/verifyemail?token=${verificationToken}`)

        await sendMail(
            newUserData.email,
            EMAIL_SUBJECT.VERIFY,
            html,
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
