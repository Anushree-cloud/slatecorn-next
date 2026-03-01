import React from 'react'
import Tooltip, { tooltipClasses }  from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import { colorPalette } from '../../constants/colorPalette'

const DefaultTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: colorPalette.light,
        transform: 'translate(0px, 8px)'
    },
    [`& .${tooltipClasses.tooltip}`]: {
        boxShadow: '0px 2px 5px rgba(225, 229, 235, 0.8)',
        backgroundColor: colorPalette.light,
        color: colorPalette.dark,
        fontFamily: 'Rubik',
        fontWeight: '400',
        padding: '4px 15px',
        maxWidth: '350px',
        width: 'max-content',
        fontSize: 14,
        fontStyle: 'italic',
        // border: '1px solid #dadde9',
    },
}))

export default DefaultTooltip
