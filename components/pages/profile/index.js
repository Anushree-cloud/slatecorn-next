"use client"
import React from 'react'
import FlexDiv from '@/shared/FlexDiv'
import { useSelector } from 'react-redux'
import { colorPalette } from '@/constants/colorPalette'
import ProfileImage from './ProfileImage'
import PeopleFollow from './PeopleFollow'
import Bio from './Bio'
import ProfileStat from './ProfileStat'
import Interests from './Interests'
import './profile.css'

function Profile({ onClose }) {
	const user = useSelector((state) => state.user.user)

	return (
		<FlexDiv
			flexDirection="column"
			customStyle={{
				width: '100%',
				backgroundColor: colorPalette.bodyBackground,
				height: '100%',
			}}
		>
			<ProfileImage user={user} onClose={onClose} />
			<FlexDiv flexDirection='column' customStyle={{ width: '100%', maxHeight: '100%', overFlowY: 'auto' }}>
				<PeopleFollow user={user} />
				<Bio user={user} />
				<ProfileStat user={user} />
				<Interests user={user} />
			</FlexDiv>
		</FlexDiv>
	)
}

export default Profile
