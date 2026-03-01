import { CircularProgress, Typography } from '@mui/material'
import FlexDiv from '@/shared/FlexDiv'
import React from 'react'
import { colorPalette } from '@/constants/colorPalette'
import './loaders.css'

function SlateLoader({
  loadingText = 'Initializing...',
}) {
  return (
    <FlexDiv className="slate-loader">
        <CircularProgress />
        <Typography variant='h4' fontStyle={'italic'} color={colorPalette.light}>{loadingText}</Typography>
    </FlexDiv>
  )
}

export default SlateLoader
