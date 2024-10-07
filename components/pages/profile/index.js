import React from 'react'
import FlexDiv from '@/shared/FlexDiv'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { colorPalette } from '@/constants/colorPalette'
import CardButton from '@/shared/buttons/CardButton'
import coverPicture from '@/assets/images/cover.webp'
import userImage from '@/assets/images/profile.png'
import { Card, Typography } from '@mui/material'
import { numberWithK } from '@/utils/numberFormatting'
import { formatDate } from '@/utils/dateFormatting'
import { dateFormates } from '@/constants/date'
import editIcon from '@/assets/icons/editIcon.svg'
import IconButton from '@/shared/buttons/IconButton'
import closeIcon from '@/assets/icons/closeIcon.svg'
import likesIcon from '@/assets/icons/like.svg'
import TextWithIcon from '@/shared/typography/TextWithIcon'
import slateIcon from '@/assets/icons/slateIcon.svg'
import notesIcon from '@/assets/icons/notesIcon.svg'
import rocketIcon from '@/assets/icons/rocketIcon.svg'
import smileUpsideDownIcon from '@/assets/icons/smileUpsideDown.svg'
import timeIcon from '@/assets/icons/timeIcon.svg'
import cameraIcon from '@/assets/icons/cameraIcon.svg'

function Profile({ onClose }) {
	const user = useSelector((state) => state.user.user)

	return (
		<FlexDiv
			flexDirection="column"
			customStyle={{
				width: '100%',
				backgroundColor: colorPalette.background,
				height: '100%',
			}}
		>
			<FlexDiv
				customStyle={{
					overFlow: 'hidden',
					height: 200,
					width: '100%',
					boxShadow: '0px 2px 5px #aaa',
				}}
			>
				<FlexDiv
					style={{
						position: 'relative',
						height: '100%',
						overflow: 'hidden',
						width: '100%',
						background:
							'radial-gradient(circle, transparent 60%, rgba(0, 0, 0, 0.7))',
					}}
				>
					<Image
						src={coverPicture}
						alt="user"
						// width={800}
						// height={400}
						layout="fill"
						objectFit="cover"
						style={{ width: '100%' }}
					/>
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							background:
								'radial-gradient(circle, transparent 80%, rgba(0, 0, 0, 0.7))',
							pointerEvents: 'none',
						}}
					/>
				</FlexDiv>

				<IconButton
					icon={closeIcon}
					onHoverVisible={true}
					customStyle={{
						button: { position: 'absolute', top: 10, right: 10 },
						icon: { height: 35, width: 35 },
					}}
				/>
				<IconButton
					icon={cameraIcon}
					onHoverVisible={true}
					customStyle={{
						button: { position: 'absolute', top: 160, right: 10, borderRadius: '50%', boxShadow: '0px 0px 10px #000', padding: 5 },
						// icon: { height: 35, width: 35 },
					}}
				/>

				<FlexDiv
					style={{
						position: 'absolute',
						backgroundColor: 'white',
						top: 120,
						left: 20,
						borderRadius: '50%',
						border: '2px solid white',
						boxShadow: '0px 0px 10px #8A9A9E',
						width: 100,
						height: 100,
						overflow: 'hidden',
					}}
				>
					<Image
						src={userImage}
						alt="user"
						width={100}
						height={100}
					/>
				</FlexDiv>
				<FlexDiv
					customStyle={{ position: 'absolute', top: 150, left: 135 }}
				>
					<Typography
						style={{
							fontSize: 30,
							fontWeight: 'bold',
							color: colorPalette.dark,
							textShadow: '0px 0px 10px #8A9A9E',
						}}
					>
						{user.name}
					</Typography>
					<IconButton icon={editIcon} onHoverVisible={true} />
				</FlexDiv>
				<IconButton
					icon={cameraIcon}
					onHoverVisible={true}
					customStyle={{
						button: { position: 'absolute', top: 200, left: 90, borderRadius: '50%', boxShadow: '0px 0px 10px #000', padding: 3 },
						icon: { height: 15, width: 15 },
					}}
				/>
			</FlexDiv>

			<FlexDiv
				justifyContent="space-between"
				padding={'15px 20px 0px 20px'}
				customStyle={{ width: '100%' }}
			>
				<Typography style={{ fontStyle: 'italic' }}>
					<strong style={{ color: colorPalette.highlight }}>
						{numberWithK(user.followers)}
					</strong>{' '}
					people are chasing you!
				</Typography>
				<Typography style={{ fontStyle: 'italic' }}>
					You are stalking{' '}
					<strong style={{ color: colorPalette.highlight }}>
						{numberWithK(user.following)}
					</strong>{' '}
					people!
				</Typography>
			</FlexDiv>

			<FlexDiv
				padding={'0px 20px'}
				customStyle={{ position: 'relative' }}
			>
				<Typography
					style={{
						fontStyle: 'italic',
						fontSize: 12,
						color: colorPalette.dark,
						boxShadow: '0px 1px 10px #aaa',
						padding: 10,
						borderRadius: 5,
						background: '#fff',
					}}
				>
					{user.bio}
				</Typography>

				<IconButton
					icon={editIcon}
					customStyle={{
						button: {
							position: 'absolute',
							bottom: 5,
							right: 25,
						},
					}}
					onHoverVisible={true}
				/>
			</FlexDiv>

			<FlexDiv customStyle={{ width: '100%' }} gap={40}>
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
						Your Token Efforts
					</Typography>
					<FlexDiv
						flexDirection="column"
						alignItems="flex-start"
						gap={0}
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
								{formatDate(
									user.dateJoined,
									dateFormates.longDate
								)}
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

			<FlexDiv customStyle={{ width: '100%' }} gap={40}></FlexDiv>

			<FlexDiv
				padding={20}
				flexDirection="column"
				alignItems="flex-start"
				customStyle={{ width: '100%' }}
			>
				<Typography
					style={{
						fontStyle: 'italic',
						borderBottom: '1px solid #8A9A9E',
						borderTop: '1px solid #8A9A9E',
						width: '100%',
					}}
				>
					Your Interests
				</Typography>
				{!user.interests.length ? (
					<Typography>Add interests here</Typography>
				) : (
					user.interests.map((interest, interestIndex) => (
						<FlexDiv
							key={interestIndex}
							flexDirection="column"
							alignItems="flex-start"
							gap={0}
						>
							<Typography>{interest?.name}</Typography>
							<Typography>
								{interest?.keywords.join(', ')}
							</Typography>
						</FlexDiv>
					))
				)}
			</FlexDiv>
		</FlexDiv>
	)
}

export default Profile
