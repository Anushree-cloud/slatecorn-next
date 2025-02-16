import React from 'react'
import { colorPalette } from '@/constants/colorPalette'
import {
	Dialog,
	Skeleton,
	Typography,
} from '@mui/material'
import IconButton from '@/shared/buttons/IconButton'
import closeIcon from '@/public/assets/icons/closeIcon.svg'
import FlexDiv from '@/shared/FlexDiv'
import CardButton from '@/shared/buttons/CardButton'
import '@/shared/loaders/loaders.css'

const ConfirmButton = ({ onClick, ...props }) => {
	return (
		<CardButton
			type="submit"
			name={'Confirm'}
			width="100%"
			backgroundColor={colorPalette.highlight}
			onClick={onClick}
			{...props}
		/>
	)
}

const CancelButton = ({ onClick, ...props }) => {
	return (
		<CardButton
			type="submit"
			name={'Cancel'}
			width="100%"
			backgroundColor={colorPalette.info}
			onClick={onClick}
			{...props}
		/>
	)
}

const LoadingSkeleton = () => {
	return (
		<>
			<Skeleton variant='rounded' height={30} style={{ width: '100%', background: colorPalette.light }} />
			
			<FlexDiv
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					gap: 10,
				}}
			>
				<Typography className='slate-loader' style={{ padding: 10 }}>
					Loading...
				</Typography>

				<FlexDiv customStyle={{ width: '100%' }}>
					<Skeleton variant='rounded' height={20} style={{ width: '100%', background: colorPalette.highlight }} />
					<Skeleton variant='rounded' height={20} style={{ width: '100%', background: colorPalette.info }} />
				</FlexDiv>
			</FlexDiv>
		</>
	)
}

function BasicAlert({
    open,
    onClose = () => {},
    handleSubmit = () => {},
	title = 'Alert',
	body = 'Are you sure?',
	CustomConfirmButton = ConfirmButton,
	CustomCancelButton = CancelButton,
	confirmButtomProps = {},
	cancelButtonProps = {},
	loading = false
}) {

	return (
		<Dialog open={open}>
			<FlexDiv
				flexDirection="column"
				padding={10}
				customStyle={{ width: 500 }}
			>
				{loading ? 
					<LoadingSkeleton />
					:
					<>
						<FlexDiv
							justifyContent="space-between"
							alignItems="center"
							customStyle={{ width: '100%', backgroundColor: colorPalette.light, borderRadius: 5 }}
							padding={10}
						>
							<Typography
								variant="h5"
								style={{
									fontStyle: 'italic',
									fontWeight: 'bold',
								}}
							>
								{title}
							</Typography>
							<IconButton
								onClick={onClose}
								icon={closeIcon}
							/>
						</FlexDiv>
						
						<FlexDiv
							style={{
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								gap: 10,
							}}
						>
							<Typography style={{ padding: 10 }}>
								{body}
							</Typography>

							<FlexDiv customStyle={{ width: '100%' }}>
								<CustomConfirmButton onClick={handleSubmit} {...confirmButtomProps} />
								<CustomCancelButton onClick={onClose} {...cancelButtonProps} />
							</FlexDiv>
						</FlexDiv>
					</>
				}
			</FlexDiv>
		</Dialog>
	)
}

export default BasicAlert
