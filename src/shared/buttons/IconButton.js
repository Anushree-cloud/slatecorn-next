'use client'
import { IconButton } from '@mui/material'
import React from 'react'
import { colorPalette } from '../../constants/colorPalette'
import Image from 'next/image'

function IconButtonCustom({
	name = 'Click',
	onClick = () => {},
	backgroundColor = 'transparent',
	width = 'auto',
	height = 'auto',
	customStyle = {
		button: {},
		icon: {},
	},
	icon,
	onHoverVisible = false,
	...props
}) {
	return (
		<IconButton
			style={{
				color: colorPalette.light,
				borderRadius: 5,
				textTransform: 'none',
				backgroundColor,
				width,
				height,
				opacity: onHoverVisible ? '0.5' : '1',
				padding: 0,
				// boxShadow: `0px 0px 10px ${colorPalette.dark}`,
				// borderRadius: '50%',
				...customStyle.button
			}}
			className={onHoverVisible ? 'button-hover-visible' : ''}
			onClick={onClick}
			{...props}
		>
			<Image  src={icon} alt="icon" width={20} height={20} style={customStyle.icon} />
		</IconButton>
	)
}

export default IconButtonCustom
