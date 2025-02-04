import "@/libs/mongodb/connection"
import {getUser, getUsers} from "@/controllers/users"

export function POST(req) {
    return getUser(req)
}

export function GET() {
    return getUsers()
}