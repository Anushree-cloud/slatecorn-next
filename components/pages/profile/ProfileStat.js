import React from 'react'
import FlexDiv from '@/shared/FlexDiv'
import { colorPalette } from '@/constants/colorPalette'
import { Typography } from '@mui/material'
import TextWithIcon from '@/shared/typography/TextWithIcon'
import slateIcon from '@/assets/icons/slateIcon.svg'
import notesIcon from '@/assets/icons/notesIcon.svg'
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
						color: colorPalette.infoDark,
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
					<TextWithIcon icon={likesIcon}>
						Tokens Earned{' '}
						<strong
							style={{
								color: colorPalette.highlight,
								fontSize: 20,
							}}
						>
							{user.tokensEarned}
						</strong>
					</TextWithIcon>

					<TextWithIcon icon={slateIcon}>
						Total slate board(s) created{' '}
						<strong
							style={{
								color: colorPalette.highlight,
								fontSize: 20,
							}}
						>
							{user.totalSlateBoardsCreated}
						</strong>
					</TextWithIcon>

					<TextWithIcon icon={notesIcon}>
						Total note(s) created{' '}
						<strong
							style={{
								color: colorPalette.highlight,
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
						color: colorPalette.infoDark,
						textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
					}}
				>
					Your contibution to earth
				</Typography>
				<FlexDiv
					flexDirection="column"
					alignItems="flex-start"
					gap={0}
					padding={'0px 10px'}
				>
					<TextWithIcon icon={rocketIcon}>
						Date you became a human:{' '}
						<strong
							style={{
								color: colorPalette.highlight,
								fontSize: 20,
							}}
						>
							{formatDate(
								user.dateOfBirth,
								dateFormates.longDate
							)}
						</strong>
					</TextWithIcon>

					<TextWithIcon icon={smileUpsideDownIcon}>
						We know you from:{' '}
						<strong
							style={{
								color: colorPalette.highlight,
								fontSize: 20,
							}}
						>
							{formatDate(user.dateJoined, dateFormates.longDate)}
						</strong>
					</TextWithIcon>

					<TextWithIcon icon={timeIcon}>
						Last you were wasting time here at:{' '}
						<strong
							style={{
								color: colorPalette.highlight,
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
