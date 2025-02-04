import connectDB from "@/libs/mongodb"
import User from "@/models/user"
import { NextResponse } from 'next/server'

export async function POST(req) {
    const  userRequestedValue = await req.json()
    console.log("====================================================================")
    console.log("getUser", userRequestedValue)
    console.log("====================================================================")
    await connectDB()
    const user = await User.findOne({ email: userRequestedValue.email })
    console.log("====================================================================")
    console.log("user", user)
    console.log("====================================================================")
    return NextResponse.json({ message: "success", user },{ status: 200})
}