import React from 'react'
import FlexDiv from '@/shared/FlexDiv'
import { colorPalette } from '@/constants/colorPalette'
import { Typography } from '@mui/material'
import TextWithIcon from '@/shared/typography/TextWithIcon'
import slateIcon from '@/assets/icons/slateIconLight.svg'
import notesIcon from '@/assets/icons/notesLightIcon.svg'
import rocketIcon from '@/assets/icons/rocketIcon.svg'
import smileUpsideDownIcon from '@/assets/icons/smileUpsideDown.svg'
import timeIcon from '@/assets/icons/timeIcon.svg'
import likesIcon from '@/assets/icons/like.svg'
import { formatDate } from '@/utils/dateFormatting'
import { dateFormates } from '@/constants/date'

function ProfileStat({ user }) {
	return (
		<FlexDiv customStyle={{ width: '100%' }} gap={40}>
			<FlexDiv
				padding={20}
				flexDirection="column"
				alignItems="flex-start"
				gap={0}
				customStyle={{
					width: '80%',
					borderRadius: '5px',
					transition: 'all 0.3s ease',
				}}
			>
				<Typography
					style={{
						fontStyle: 'italic',
						fontWeight: 'bold',
						width: '100%',
						fontSize: '20px',
						color: 'rgb(137 182 229)',
						textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
					}}
				>
					Your Token Efforts
				</Typography>
				<FlexDiv
					flexDirection="column"
					alignItems="flex-start"
					gap={0}
					padding={'0px 10px'}
				>
					<TextWithIcon icon={likesIcon} customStyle={{ text: { color: colorPalette.light } }}>
						Tokens Earned{' '}
						<strong
							style={{
								color: colorPalette.hightLightText,
								fontSize: 20,
							}}
						>
							{user.tokensEarned}
						</strong>
					</TextWithIcon>

					<TextWithIcon icon={slateIcon} customStyle={{ text: { color: colorPalette.light } }}>
						Total slate board(s) created{' '}
						<strong
							style={{
								color: colorPalette.hightLightText,
								fontSize: 20,
							}}
						>
							{user.totalSlateBoardsCreated}
						</strong>
					</TextWithIcon>

					<TextWithIcon icon={notesIcon} customStyle={{ text: { color: colorPalette.light } }}>
						Total note(s) created{' '}
						<strong
							style={{
								color: colorPalette.hightLightText,
								fontSize: 20,
							}}
						>
							{user.totalNotesCreated}
						</strong>
					</TextWithIcon>
				</FlexDiv>
			</FlexDiv>
			<FlexDiv
				padding={20}
				flexDirection="column"
				alignItems="flex-start"
				gap={0}
				customStyle={{
					width: '100%',
					borderRadius: '5px',
					transition: 'all 0.3s ease',
				}}
			>
				<Typography
					style={{
						fontStyle: 'italic',
						fontWeight: 'bold',
						width: '100%',
						fontSize: '20px',
						color: 'rgb(137 182 229)',
						textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
					}}
				>
					Your contribution to earth
				</Typography>
				<FlexDiv
					flexDirection="column"
					alignItems="flex-start"
					gap={0}
					padding={'0px 10px'}
				>
					<TextWithIcon icon={rocketIcon} customStyle={{ text: { color: colorPalette.light } }}>
						Date you became a human:{' '}
						<strong
							style={{
								color: colorPalette.hightLightText,
								fontSize: 20,
							}}
						>
							{formatDate(
								user.dateOfBirth,
								dateFormates.longDate
							)}
						</strong>
					</TextWithIcon>

					<TextWithIcon icon={smileUpsideDownIcon} customStyle={{ text: { color: colorPalette.light } }}>
						We know you from:{' '}
						<strong
							style={{
								color: colorPalette.hightLightText,
								fontSize: 20,
							}}
						>
							{formatDate(user.dateJoined, dateFormates.longDate)}
						</strong>
					</TextWithIcon>

					<TextWithIcon icon={timeIcon} customStyle={{ text: { color: colorPalette.light } }}>
						Last you were wasting time here at:{' '}
						<strong
							style={{
								color: colorPalette.hightLightText,
								fontSize: 20,
							}}
						>
							{formatDate(
								user.lastLogin,
								dateFormates.fullDateReverse
							)}
						</strong>
					</TextWithIcon>
				</FlexDiv>
			</FlexDiv>
		</FlexDiv>
	)
}

export default ProfileStat
