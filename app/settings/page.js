import { Typography } from '@mui/material'
import React from 'react'
import { colorPalette } from '@/constants/colorPalette'

function page() {
	return (
        <Typography 
            color={colorPalette.light}
        >
            Picture Abhi Baaki Hain Mere dost!
        </Typography>
    )
}

export default page
