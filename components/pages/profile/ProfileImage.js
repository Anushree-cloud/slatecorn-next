import React, { useEffect } from 'react'
import FlexDiv from '@/shared/FlexDiv'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import IconButton from '@/shared/buttons/IconButton'
import { colorPalette } from '@/constants/colorPalette'
import closeIcon from '@/public/assets/icons/closeIcon.svg'
import cameraIcon from '@/public/assets/icons/cameraIcon.svg'
import editIcon from '@/public/assets/icons/editIcon.svg'
import coverPicture from '@/public/assets/images/cover.webp'
import HoverField from '@/shared/textfields/hoverField'
import { updateUser } from '@/store/reducers/user'
import { useDispatch } from 'react-redux'
import { Button, Dialog, Input, Tooltip } from '@mui/material'
import TextWithIcon from '@/shared/typography/TextWithIcon'
import CardButton from '@/shared/buttons/CardButton'
import userImage from '@/public/assets/images/profile.png'

function ProfileImage({ user }) {
	const dispatch = useDispatch()
	const [currentUserName, setCurrentUserName] = React.useState(user.name)
	const [userPicture, setUserPicture] = React.useState({
		profilePicture: user.profilePicture,
		coverPicture: user.coverPicture
	})
	const [isUserImageClick, setIsUserImageClick] = React.useState({
		profilePicture: false,
		coverPicture: false
	})

	const onOpenUserImage = (fieldName) => {
		setIsUserImageClick({
			...isUserImageClick,
			[fieldName]: true
		})
	}

	const onCloseUserImage = (fieldName) => {
		setIsUserImageClick({
			...isUserImageClick,
			[fieldName]: false
		})
	}

	const updateUserName = (nameString) => {
		dispatch(updateUser({
			...user,
			name: nameString
		}))
	}

	const updateUserPicture = (fieldName) => {
		onCloseUserImage(fieldName)
		dispatch(updateUser({
			...user,
			[fieldName]: userPicture[fieldName]
		}))
	}

	const onImageUpload = (file, fieldName) => {
		const fileUrl = URL.createObjectURL(file)
		setUserPicture((prev) => ({
			...prev,
			[fieldName]: fileUrl
		}))
	}

	return (
		<>
			<FlexDiv justifyContent='center' alignItems='flex-start' flexDirection='column' customStyle={{ width: '100%' }}>
				<FlexDiv
					customStyle={{
						overFlow: 'hidden',
						height: 250,
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
							src={!user.coverPicture ? coverPicture : user.coverPicture}
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

					<div 
						className='fileUpload'
						style={{
							position: 'absolute',
							top: 280,
							right: 20,
							boxShadow: '0px 0px 10px #000',
							padding: 5,
							opacity: 0.5,
							width: 'auto'
						}}
						onClick={() => onOpenUserImage('coverPicture')}
					>
						<FlexDiv justifyContent='center'>
							<TextWithIcon customStyle={{text: {color: colorPalette.dark}}} icon={cameraIcon}>Change Your Cover</TextWithIcon>
						</FlexDiv>
					</div>

					<FlexDiv
						onClick={() => onOpenUserImage('profilePicture')}
						customStyle={{
							position: 'absolute',
							backgroundColor: 'white',
							top: 250,
							left: 115,
							borderRadius: '50%',
							border: '2px solid white',
							boxShadow: '0px 0px 10px #8A9A9E',
							width: 100,
							height: 100,
							overflow: 'hidden',
							justifyContent: 'center',
							alignItems: 'flex-start',
						}}
					>
						<FlexDiv 
							justifyContent='center' 
							alignItems='center'
							customStyle={{
								overFlow: 'hidden',
								height: '100%',
								width: '100%'
							}}
						>
							{!user.profilePicture ?
								<Image
									src={userImage} 
									height={100}
									width={100}
								/>
								:
								<img 
									src={user.profilePicture} 
									alt="user" 
									style={{
										height: '100%',
										width: '100%',
										objectFit: 'cover'
									}}
								/>
							}
						</FlexDiv>
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
							customStyle={{
								input: {
									color: colorPalette.light,
								}
							}}
						/>
					</Tooltip>
				</FlexDiv>
			</FlexDiv>

			<Dialog 
				open={isUserImageClick.profilePicture} 
				onClose={() => onCloseUserImage(false)}
				PaperProps={{
					height: 'max-content',
					width: 'max-content',
				}}
			>
				<FlexDiv
					flexDirection='column'
					padding={25}
					customStyle={{
						backgroundColor: colorPalette.dark
					}}
				>
					<FlexDiv 
						justifyContent='center' 
						alignItems='center'
						customStyle={{ 
							borderRadius: '50%', 
							border: '5px groove rgb(43,43,43)',
							height: 350,
							width: 350,
							overflow: 'hidden',
							backgroundColor: colorPalette.light
						}}
					>
						{!userPicture.profilePicture ?
							<Image
								src={userImage} 
								height={300}
								width={300}
							/>
							:
							<img
								id='profile-image'
								src={userPicture.profilePicture} 
								alt="user" 
								style={{
									objectFit: 'none',
									height: '100%',
									width: '100%'
								}}
							/>
						}
					</FlexDiv>
					<FlexDiv customStyle={{ width: '100%' }} flexDirection='column' gap={5}>
						<div className='fileUpload'>
							<input 
								type='file' 
								className="upload" 
								id='image-uploading-input'
								onChange={(event) => onImageUpload(event.target.files[0], 'profilePicture')}
							/>
							<FlexDiv justifyContent='center'>
								<TextWithIcon customStyle={{text: {color: colorPalette.dark}}} icon={cameraIcon}>Change Your Face</TextWithIcon>
							</FlexDiv>
						</div>
						<FlexDiv customStyle={{ width: '100%' }} gap={5}>
							<CardButton
								customStyle={{
									borderRadius: '20px 0px 0px 20px',
									padding: 10
								}}
								backgroundColor={colorPalette.success}
								width='100%'
								name='Save'
								onClick={() => updateUserPicture('profilePicture')}
							/>
							<CardButton
								customStyle={{
									borderRadius: '0px 20px 20px 0px',
									padding: 10
								}}
								backgroundColor={colorPalette.danger}
								width='100%'
								name='Cancel'
								onClick={() => onCloseUserImage('profilePicture')}
							/>
						</FlexDiv>
					</FlexDiv>
					
				</FlexDiv>
			</Dialog>

			<Dialog 
				open={isUserImageClick.coverPicture} 
				onClose={() => onCloseUserImage('coverPicture')}
				sx={{
					'& .MuiPaper-root': {
						width: 700
					}
				}}
			>
				<FlexDiv
					flexDirection='column'
					padding={25}
					customStyle={{
						backgroundColor: colorPalette.dark
					}}
				>
					<FlexDiv 
						justifyContent='center' 
						alignItems='center'
						customStyle={{
							borderRadius: '5px',
							border: '5px groove rgb(43, 43, 43)',
							height: '150px',
							width: '100%',
							overflow: 'hidden',
							backgroundColor: 'rgb(240, 237, 229)',
						}}
					>
						{!userPicture.coverPicture ?
							<Image
								src={coverPicture} 
								height={300}
								width={100}
								style={{
									width: '100%',
								}}
							/>
							:
							<img
								id='profile-image'
								src={userPicture.coverPicture} 
								alt="user" 
								style={{
									objectFit: 'none',
									height: '100%',
									width: '100%'
								}}
							/>
						}
					</FlexDiv>
					<FlexDiv customStyle={{ width: '100%' }} flexDirection='column' gap={5}>
						<div className='fileUpload'>
							<input 
								type='file' 
								className="upload" 
								id='image-uploading-input'
								onChange={(event) => onImageUpload(event.target.files[0], 'coverPicture')}
							/>
							<FlexDiv justifyContent='center'>
								<TextWithIcon customStyle={{text: {color: colorPalette.dark}}} icon={cameraIcon}>Change Your Cover</TextWithIcon>
							</FlexDiv>
						</div>
						<FlexDiv customStyle={{ width: '100%' }} gap={5}>
							<CardButton
								customStyle={{
									borderRadius: '20px 0px 0px 20px',
									padding: 10
								}}
								backgroundColor={colorPalette.success}
								width='100%'
								name='Save'
								onClick={() => updateUserPicture('coverPicture')}
							/>
							<CardButton
								customStyle={{
									borderRadius: '0px 20px 20px 0px',
									padding: 10
								}}
								backgroundColor={colorPalette.danger}
								width='100%'
								name='Cancel'
								onClick={() => onCloseUserImage('coverPicture')}
							/>
						</FlexDiv>
					</FlexDiv>
					
				</FlexDiv>
			</Dialog>
		</>
	)
}

export default ProfileImage
