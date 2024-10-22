'use client'
import { ROUTES } from '@/constants/routes'
import { initialSelectedItem } from '@/constants/sideNavigation'
import { selectSidebarItem } from '@/store/reducers/sidebar'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function PageRoot() {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

	return isLoggedIn ? redirect(ROUTES.MAIN_ROUTES.dashboard) : redirect(ROUTES.AUTH_ROUTES.login)
}
