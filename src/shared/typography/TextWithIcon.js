import React from 'react'
import FlexDiv from '../../shared/FlexDiv'
import Image from 'next/image'
import { Typography } from '@mui/material'

function TextWithIcon({
	icon,
	children,
	iconWidth = 20,
	iconHeight = 20,
	customStyle = { div: {}, icon: {}, text: {} },
	iconPosition = 'left',
	...props
}) {
	return (
		<FlexDiv gap={5} customStyle={customStyle.div} {...props}>
			{ iconPosition === 'left' &&
				<Image
					src={icon}
					alt="icon"
					width={iconWidth}
					height={iconHeight}
					style={customStyle.icon}
				/>
			}
			<Typography style={{ ...customStyle.text }}>{children}</Typography>
			{ iconPosition === 'right' &&
				<Image
					src={icon}
					alt="icon"
					width={iconWidth}
					height={iconHeight}
					style={customStyle.icon}
				/>
			}
		</FlexDiv>
	)
}

export default TextWithIcon
