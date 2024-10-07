'use client'
import { createSlice } from '@reduxjs/toolkit'
import { userActions } from '../actions/user'
import { dummyUser } from '../../constants/user'

const initialState = {
	user: dummyUser,
	isLoggedIn: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: userActions.login,
		logout: userActions.logout,
		setUser: userActions.setUser,
        updateUser: userActions.updateUser,
	},
})

export const { login, logout, setUser, updateUser } = userSlice.actions

export default userSlice.reducer