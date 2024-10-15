import React, { useEffect } from 'react'
import FlexDiv from '@/shared/FlexDiv'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import IconButton from '@/shared/buttons/IconButton'
import { colorPalette } from '@/constants/colorPalette'
import closeIcon from '@/assets/icons/closeIcon.svg'
import cameraIcon from '@/assets/icons/cameraIcon.svg'
import editIcon from '@/assets/icons/editIcon.svg'
import userImage from '@/assets/images/profile.png'
import coverPicture from '@/assets/images/cover.webp'
import HoverField from '@/shared/textfields/hoverField'
import { updateUser } from '@/store/reducers/user'
import { useDispatch } from 'react-redux'
import { Button, Tooltip } from '@mui/material'
import ProfileImageOverlay from '@/shared/Overlay'
import TextWithIcon from '@/shared/typography/TextWithIcon'

function ProfileImage({ user, onClose }) {
	const dispatch = useDispatch()
	const [currentUserName, setCurrentUserName] = React.useState(user.name)
	const [isProfileImageClick, setIsProfileImageClick] = React.useState(false)

	const updateUserName = (nameString) => {
		dispatch(updateUser({
			...user,
			name: nameString
		}))
	}

	return (
		<FlexDiv justifyContent='center' alignItems='flex-start' flexDirection='column' customStyle={{ width: '100%' }}>
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
					onClick={onClose}
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
						button: {
							position: 'absolute',
							top: 160,
							right: 10,
							borderRadius: '50%',
							boxShadow: '0px 0px 10px #000',
							padding: 5,
						},
					}}
				/>

				{ isProfileImageClick && <ProfileImageOverlay /> }
				<FlexDiv
					onClick={() => setIsProfileImageClick(true)}
					customStyle={{
						position: 'absolute',
						backgroundColor: 'white',
						top: isProfileImageClick ? 250 :120,
						left: isProfileImageClick ? '46%' : 20,
						borderRadius: isProfileImageClick ? '5px' : '50%',
						border: '2px solid white',
						boxShadow: '0px 0px 10px #8A9A9E',
						width: 100,
						height: 100,
						overflow: 'hidden',
						transform: isProfileImageClick ? 'scale(3.5)' : 'scale(1)',
						justifyContent: 'center',
						alignItems: 'flex-start',
						padding: '5px',
						zIndex: isProfileImageClick ? 1000 : 1,
					}}
				>
					<Image src={userImage} alt="user" width={100} height={100} />
					{isProfileImageClick && <FlexDiv customStyle={{ width: '100%' }} flexDirection='column' gap={5}>
						<Button style={{ background: colorPalette.background }}>
							<TextWithIcon icon={cameraIcon}>Change you face</TextWithIcon>
						</Button>
						<Button style={{ background: colorPalette.background }}>
							<TextWithIcon icon={closeIcon}>Happy with current face</TextWithIcon>
						</Button>
					</FlexDiv>}
				</FlexDiv>
			</FlexDiv>

			<FlexDiv padding={'20px 20px 0px 20px'}>
				<Tooltip title={'No affidavit required. Just click on it!'} placement='top-end' arrow>
					<HoverField 
						value={currentUserName} 
						onChange={(event) => setCurrentUserName(event.target.value)} 
						shouldDebounce={true}
						debounceHandler={updateUserName}
						customClass='profile-name'
					/>
				</Tooltip>
			</FlexDiv>
		</FlexDiv>
	)
}

export default ProfileImage
