import {success, error} from "@/macros/response"
import User from "@/models/user"

export const getUser = async (req) => {
    try {
        const userRequest = await req.json()
        const user = await User.findOne({ email: userRequest.email })
        console.log('8=>',user)
        if(!user) return error({ status: 202, message: 'User not found' })
        return success({ data: user })
    } catch (err) {
        return error({ data: error })
    }
}

export const getUsers = async () => {
    try {
        const users = await User.find()
        return success({ data: users })
    } catch (err) {
        return error({ data: err })
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return success({ data: user })
    } catch (err) {
        return error({ data: err })
    }
}

export const updateUser = async (req) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true })
        return success({ data: user })
    } catch (err) {
        return error({ data: err })
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        return success()
    } catch (err) {
        return error({ data: err })
    }
}