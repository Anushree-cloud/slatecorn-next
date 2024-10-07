'use client'
import FlexDiv from '@/shared/FlexDiv'
import React from 'react'
import Image from 'next/image'
import userImage from '@/assets/images/profile.png'
import { colorPalette } from '@/constants/colorPalette'
import { Dialog, Typography } from '@mui/material'
import Profile from '../../../components/pages/profile'

function User() {
	const [isProfileOpen, setIsProfileOpen] = React.useState(false)

	const onProfileClick = () => {
		setIsProfileOpen(true)
	}

	const onProfileClose = () => {
		setIsProfileOpen(false)
	}

	return (
		<>
			<FlexDiv padding={'0px 10px'}>
				<Typography
					style={{ fontWeight: 'bold', color: colorPalette.light }}
				>
					Captain Duck
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
					onClick={onProfileClick}
				/>
			</FlexDiv>
			<Dialog
				open={isProfileOpen}
				onClose={onProfileClose}
				sx={{
					'& .MuiPaper-root': {
						maxWidth: '1200px !important',
						height: '90vh',
						width: '1200px !important'
					},
				}}
			>
				<Profile onClose={onProfileClose} />
			</Dialog>
		</>
	)
}

export default User
