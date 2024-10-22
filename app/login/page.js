'use client'
import DashBoard from '@/components/pages/dashboard'
import { ROUTES } from '@/constants/routes'
import { initialSelectedItem } from '@/constants/sideNavigation'
import { selectSidebarItem } from '@/store/reducers/sidebar'
import { setLoading, setIsLoggedIn } from '@/store/reducers/user'
import { Button } from '@mui/material'
import { redirect, useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

export default function PageRoot() {
    const dispatch = useDispatch()
    const router = useRouter()
	const onLogin = () => {
        dispatch(setIsLoggedIn())
        dispatch(selectSidebarItem(initialSelectedItem))
        setTimeout(() => dispatch(setLoading(false)), 1500)
        router.push(ROUTES.HOME)
	}
	return (
		<>
			<Button onClick={onLogin}>Login</Button>
		</>
	)
}
