import React from 'react'

function FlexDiv({
	display = 'flex',
	gap = 10,
	padding = 0,
	alignItems = 'center',
	justifyContent = 'flex-start',
    flexDirection = 'row',
    flexWrap = 'nowrap',
	customStyle = {},
	...props
}) {
	return (
		<div
			style={{ 
				display, 
				gap, 
				padding, 
				alignItems, 
				justifyContent, 
				flexDirection, 
				flexWrap,
				...customStyle 
			}}
			{...props}
		>
			{props.children}
		</div>
	)
}

export default FlexDiv
