import React from 'react'
import FlexDiv from '@/shared/FlexDiv'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { colorPalette } from '@/constants/colorPalette'

function TextWithIcon({
	icon,
	children,
	customStyle = { div: {}, icon: {}, text: {} },
	...props
}) {
	return (
		<FlexDiv gap={5} customStyle={customStyle.div} {...props}>
			<Image
				src={icon}
				alt="icon"
				width={20}
				height={20}
				style={{
					...customStyle.icon,
				}}
			/>
			<Typography style={{ ...customStyle.text, color: colorPalette.text }}>{children}</Typography>
		</FlexDiv>
	)
}

export default TextWithIcon
