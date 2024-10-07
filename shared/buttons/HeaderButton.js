'use client'
import { Button } from '@mui/material'
import React from 'react'
import { colorPalette } from '@/constants/colorPalette'

function HeaderButton({ name, onClick, disabled=false, ...props }) {
	return (
		<Button
			style={{
				backgroundColor: colorPalette.primary,
				color: colorPalette.light,
				borderRadius: 5,
				textTransform: 'none',
        opacity: disabled ? 0.5 : 1,
			}}
			onClick={onClick}
      disabled={disabled}
      {...props}
		>
			{name}
		</Button>
	)
}

export default HeaderButton
