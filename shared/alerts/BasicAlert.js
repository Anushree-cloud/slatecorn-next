import React from 'react'
import { colorPalette } from '@/constants/colorPalette'
import {
	Dialog,
	Typography,
} from '@mui/material'
import IconButton from '@/shared/buttons/IconButton'
import closeIcon from '@/assets/icons/closeIcon.svg'
import FlexDiv from '@/shared/FlexDiv'
import CardButton from '@/shared/buttons/CardButton'

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
}) {

	return (
		<Dialog open={open}>
			<FlexDiv
				flexDirection="column"
				padding={10}
				customStyle={{ width: 500 }}
			>
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
					<Typography padding={10}>
						{body}
					</Typography>

					<FlexDiv customStyle={{ width: '100%' }}>
						<CustomConfirmButton onClick={handleSubmit} {...confirmButtomProps} />
						<CustomCancelButton onClick={onClose} {...cancelButtonProps} />
					</FlexDiv>
				</FlexDiv>
						
			</FlexDiv>
		</Dialog>
	)
}

export default BasicAlert
