'use client'
import FlexDiv from '../../../shared/FlexDiv'
import React, { use } from 'react'
import Image from 'next/image'
import userImage from '@/public/assets/images/profile.png'
import { colorPalette } from '../../../constants/colorPalette'
import { Dialog, MenuItem, Popover, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import TextWithIcon from '../../../shared/typography/TextWithIcon'
import profileIcon from '@/public/assets/icons/profile.svg'
import logoutIcon from '@/public/assets/icons/logout.svg'
import { redirect, useRouter } from 'next/navigation'
import { ROUTES } from '../../../constants/routes'
import { login, logout } from '../../../store/reducers/user'

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
		router.push(ROUTES.HOME)
	}

	return (
		<>
			<FlexDiv padding={'0px 10px'}>
				<Typography
					style={{ fontWeight: 'bold', color: colorPalette.light }}
				>
					{ user?.name }
				</Typography>
				<FlexDiv 
					justifyContent='center' 
					alignItems='center'
					customStyle={{
						height: 50,
						width: 50,
						overflow: 'hidden',
						backgroundColor: colorPalette.light,
						borderRadius: '50%',
						border: `2px solid ${colorPalette.light}`,
						boxShadow: `0px 0px 10px ${colorPalette.light}`,
						cursor: 'pointer',
					}}
				>
					{!user?.profilePicture ?
						<Image
							src={userImage}
							alt="user"
							width={50}
							height={50}
							onClick={onUserMenuClick}
						/>
						:
						<img
							src={user?.profilePicture}
							alt="user"
							style={{
								height: '100%',
								width: '100%',
								objectFit: 'cover'
							}}
							onClick={onUserMenuClick}
						/>
					}
				</FlexDiv>

			</FlexDiv>

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
