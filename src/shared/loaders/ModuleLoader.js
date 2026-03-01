import { CircularProgress, Typography } from '@mui/material'
import FlexDiv from '@/shared/FlexDiv'
import React from 'react'
import { colorPalette } from '@/constants/colorPalette'
import './loaders.css'

function SlateLoader({
  loadingText = 'Loading...',
}) {
  return (
    <FlexDiv 
        justifyContent="center" 
        className="slate-loader" 
        customStyle={{ width: '100%', height: '100%' }}
    >
        <CircularProgress />
        <Typography variant='h4' fontStyle={'italic'} color={colorPalette.light}>{loadingText}</Typography>
    </FlexDiv>
  )
}

export default SlateLoader
