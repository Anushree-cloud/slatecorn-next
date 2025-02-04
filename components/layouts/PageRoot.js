'use client'
import { ROUTES } from '@/constants/routes'
import { initialSelectedItem } from '@/constants/sideNavigation'
import { selectSidebarItem } from '@/store/reducers/sidebar'
import { redirect, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function PageRoot() {
	const router = useRouter()
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

	useEffect(() => {
		if (isLoggedIn) {
			router.prefetch(ROUTES.MAIN_ROUTES.dashboard)
			router.prefetch(ROUTES.MAIN_ROUTES.slatesSettings)
			router.prefetch(ROUTES.MAIN_ROUTES.userSettings)
			router.prefetch(ROUTES.PROFILE.user)
			router.prefetch(ROUTES.SLATE_ROUTES.listing)
			router.prefetch(ROUTES.SLATE_ROUTES.view)
		}
	}, [isLoggedIn])
	console.log('23=>','page root')
	return isLoggedIn ? redirect(ROUTES.MAIN_ROUTES.dashboard) : redirect(ROUTES.AUTH_ROUTES.login)
}
