import React from 'react'
import FlexDiv from '@/shared/FlexDiv'
import { colorPalette } from '@/constants/colorPalette'
import { Typography, IconButton as MuiIconButton } from '@mui/material'
import TextWithIcon from '@/shared/typography/TextWithIcon'
import addIcon from '@/assets/icons/addIcon.svg'

function Interests({ user }) {
	return (
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
					Your Interests
				</Typography>
				{!user.interests.length ? (
					<Typography style={{ padding: '0px 10px' }}>
						Boring peaple don't have any interest!
					</Typography>
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
				<MuiIconButton style={{ borderRadius: 5 }}>
					<TextWithIcon icon={addIcon} iconHeight={15} iconWidth={15}>
						Add new interest
					</TextWithIcon>
				</MuiIconButton>
			</FlexDiv>
		</FlexDiv>
	)
}

export default Interests