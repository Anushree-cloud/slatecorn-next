'use client'
import DashBoard from '@/components/pages/dashboard'
import { ROUTES } from '@/constants/routes'
import { Button } from '@mui/material'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function PageRoot() {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
	return redirect(isLoggedIn ? ROUTES.MAIN_ROUTES.dashboard : ROUTES.AUTH_ROUTES.login)
}
