
import { connectDB } from "@/dbConfig/dbConfig"
import {success, error} from "@/macros/response"

connectDB()

export async function GET() {
    try {
        return success({ data: "Slates fetch" })
    } catch (err) {
        return error({ data: err })
    }
}