'use client'
import { Button } from '@mui/material'
import React from 'react'
import { colorPalette } from '../../constants/colorPalette'

function CardButton({
	name = 'Click',
	onClick = () => {},
	backgroundColor = colorPalette.info,
	width = 'auto',
	height = 'auto',
	customStyle = {},
	...props
}) {
	return (
		<Button
			style={{
				color: colorPalette.light,
				borderRadius: 5,
				textTransform: 'none',
				backgroundColor,
				width,
				height,
				...customStyle
			}}
			onClick={onClick}
			{...props}
		>
			{name}
		</Button>
	)
}

export default CardButton
