'use client'
import { Button, hexToRgb } from '@mui/material'
import React from 'react'
import { colorPalette } from '../../constants/colorPalette'

function CardButton({
	name = 'Click',
	onClick = () => {},
	backgroundColor = colorPalette.info,
	width = 'auto',
	height = 'auto',
	customStyle = {},
	disabled = false,
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
				opacity: disabled ? '0.5' : '1',
				...customStyle
			}}
			disabled={disabled}
			onClick={onClick}
			{...props}
		>
			{name}
		</Button>
	)
}

export default CardButton
