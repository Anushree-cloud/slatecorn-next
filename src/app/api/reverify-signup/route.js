import { EMAIL_SUBJECT, verifyMailHTML } from "../../../constants/mailer";
import { connectDB } from "../../../dbConfig/dbConfig";
import { success, error } from "../../../macros/response";
import User from "../../../models/user";
import { sendMail } from "../../../utils/mailer";


export async function POST(req) {
    try {
        const requestBody = await req.json()
        console.log('========================reverify-signup: requestBody========================')
        console.log(requestBody)
        console.log('====================================================================')
    
        const user = await User.findOne({ email: requestBody.email })
        if (user.isVerified) {
            return error({ message: 'User already verified!', status: 400 })
        }

        const html = verifyMailHTML.replace('[USER_NAME]', user.name)
        await sendMail(
            newUserData.email,
            EMAIL_SUBJECT.VERIFY,
            html,
            EMAIL_TYPE.VERIFY,
            newUserData._id
        )

        return success({ message: 'reverification email sent successfully!', status: 200 })
            
    } catch (err) {
        console.log("================Error while reverifying user!==============")
        console.log(err)
        console.log("========================================================")
        return error({ message: err.message, status: 400 })
    }

}