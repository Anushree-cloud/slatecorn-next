import { Box } from '@mui/material'
import React from 'react'

function Overlay() {
	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				zIndex: 999,
			}}
		/>
	)
}

export default Overlay
