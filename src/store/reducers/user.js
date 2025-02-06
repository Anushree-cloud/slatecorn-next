'use client'
import { createSlice } from '@reduxjs/toolkit'
import { userActions } from '../actions/user'

const initialState = {
	user: {},
	isLoggedIn: false,
	isLoading: true
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsLoggedIn: userActions.setIsLoggedIn,
		logout: userActions.logout,
		setUser: userActions.setUser,
        updateUser: userActions.updateUser,
		setLoading: userActions.setLoading
	},
})

export const { setIsLoggedIn, logout, setUser, updateUser, setLoading } = userSlice.actions

export default userSlice.reducer