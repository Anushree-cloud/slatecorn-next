import nodemailer from 'nodemailer'
import { EMAIL_TYPE } from '../constants/mailer'
import User from '../models/user'
import bcrypt from 'bcrypt'

export const sendMail = async (to, subject, html, emailType, userId) => {
    try {
        let targetURL = `${process.env.DOMAIN}`
        let parshedHtml = html
        const hashedToken = await bcrypt.hash(userId.toString(), 10)
        if(emailType === EMAIL_TYPE.VERIFY) {
            await User.findByIdAndUpdate(userId, {
                $set: {
                    verifyToken: hashedToken,
                    VerifyTokenExpiry: Date.now() + 3600000 //token set for one hour
                },
            })
        } else if (emailType === EMAIL_TYPE.RESET) {
            await User.findByIdAndUpdate(userId, {
                $set: {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000 //token set for one hour
                },
            })
        }

        if([EMAIL_TYPE.VERIFY, EMAIL_TYPE.RESET].includes(emailType)) {
            targetURL = `${targetURL}/verifyemail?token=${hashedToken}`
            parshedHtml = parshedHtml.replace("[VEARIFICATION_LINK]", targetURL)
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            html: parshedHtml,
        }

        const mailResponse = await transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log("================Error while sending mail!==============")
                console.log(err)
                console.log("========================================================")
            } else {
                console.log("================Mail sent successfully!==============")
                console.log(info)
                console.log("========================================================")
            }
        })

        return mailResponse

    } catch (err) {
        console.log("================Error while sending mail!==============")
        console.log(err)
        console.log("========================================================")
    }
}
