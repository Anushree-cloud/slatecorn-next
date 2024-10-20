import React from 'react'
import Tooltip, { tooltipClasses }  from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import { colorPalette } from '@/constants/colorPalette'

const DefaultTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: colorPalette.light,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        boxShadow: '0px 2px 16px rgba(225, 229, 235, 0.8)',
        backgroundColor: colorPalette.light,
        color: colorPalette.dark,
        fontFamily: 'Rubik',
        fontWeight: '400',
        padding: '8px 15px',
        maxWidth: '350px',
        width: 'max-content',
        fontSize: 14,
        // border: '1px solid #dadde9',
    },
}))

export default DefaultTooltip
