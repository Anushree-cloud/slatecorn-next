'use client'
import FlexDiv from '@/shared/FlexDiv'
import React, { use } from 'react'
import Image from 'next/image'
import userImage from '@/assets/images/profile.png'
import { colorPalette } from '@/constants/colorPalette'
import { Dialog, MenuItem, Popover, Typography } from '@mui/material'
import Profile from '@/components/pages/profile'
import { useDispatch, useSelector } from 'react-redux'
import TextWithIcon from '@/shared/typography/TextWithIcon'
import profileIcon from '@/assets/icons/profile.svg'
import logoutIcon from '@/assets/icons/logout.svg'
import { redirect, useRouter } from 'next/navigation'
import { ROUTES } from '@/constants/routes'
import { login, logout } from '@/store/reducers/user'

function User() {
	const dispatch = useDispatch()
	const router = useRouter()
	const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(null)
	const user = useSelector((state) => state.user.user)

	const onUserMenuClick = (event) => {
		setIsUserMenuOpen(event.currentTarget)
	}

	const onUserMenuClose = () => {
		setIsUserMenuOpen(null)
	}

	const onUserProfileClick = () => {
		router.push(ROUTES.PROFILE.user)
	}

	const onLogout = () => {
		dispatch(logout())
		router.push(ROUTES.AUTH_ROUTES.login)
	}

	return (
		<>
			<FlexDiv padding={'0px 10px'}>
				<Typography
					style={{ fontWeight: 'bold', color: colorPalette.light }}
				>
					{ user.name }
				</Typography>
				<Image
					src={userImage}
					alt="user"
					width={50}
					height={50}
					style={{
						borderRadius: '50%',
						border: `2px solid ${colorPalette.light}`,
						boxShadow: `0px 0px 10px ${colorPalette.light}`,
						cursor: 'pointer',
					}}
					onClick={onUserMenuClick}
				/>
			</FlexDiv>
			{/* <Dialog
				open={isUserMenuOpen}
				sx={{
					'& .MuiPaper-root': {
						maxWidth: '1200px !important',
						height: '90vh',
						width: '1200px !important'
					},
				}}
			>
				<Profile onClose={onUserMenuClose} />
			</Dialog> */}

			<Popover
				id='user-menu' 
				open={Boolean(isUserMenuOpen)} 
				anchorEl={isUserMenuOpen} 
				onClose={onUserMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<MenuItem 
					style={{
						boxShadow: `inset 0px 0px 5px ${colorPalette.highlight}`
					}}
					onClick={onUserProfileClick}
				>
					<TextWithIcon icon={profileIcon}>Profile</TextWithIcon>
				</MenuItem>
				<MenuItem
					style={{
						boxShadow: `inset 0px 0px 5px ${colorPalette.highlight}`
					}}
					onClick={onLogout}
				>
					<TextWithIcon icon={logoutIcon}>Logout</TextWithIcon>
				</MenuItem>
			</Popover>
		</>
	)
}

export default User
