import React from 'react'
import FlexDiv from '@/shared/FlexDiv'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { colorPalette } from '@/constants/colorPalette'

function TextWithIcon({
	icon,
	children,
	iconWidth = 20,
	iconHeight = 20,
	customStyle = { div: {}, icon: {}, text: {} },
	...props
}) {
	return (
		<FlexDiv gap={5} customStyle={customStyle.div} {...props}>
			<Image
				src={icon}
				alt="icon"
				width={iconWidth}
				height={iconHeight}
				style={customStyle.icon}
			/>
			<Typography style={{ ...customStyle.text }}>{children}</Typography>
		</FlexDiv>
	)
}

export default TextWithIcon
