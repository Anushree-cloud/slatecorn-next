import React from 'react'
import FlexDiv from '@/shared/FlexDiv'
import { colorPalette } from '@/constants/colorPalette'
import { Typography } from '@mui/material'
import { numberWithK } from '@/utils/numberFormatting'

function PeopleFollow({ user }) {
	return (
		<FlexDiv
			justifyContent="space-between"
			padding={'0px 20px'}
			customStyle={{ width: '100%' }}
		>
			<Typography style={{ fontStyle: 'italic', color: colorPalette.light }}>
				<strong style={{ color: colorPalette.hightLightText }}>
					{numberWithK(user.followers)}
				</strong>{' '}
				people are chasing you!
			</Typography>
			<Typography style={{ fontStyle: 'italic', color: colorPalette.light }}>
				You are stalking{' '}
				<strong style={{ color: colorPalette.hightLightText }}>
					{numberWithK(user.following)}
				</strong>{' '}
				people!
			</Typography>
		</FlexDiv>
	)
}

export default PeopleFollow
