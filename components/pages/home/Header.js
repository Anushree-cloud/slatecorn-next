import React from 'react'
import Control from '../../ui/header/Control'
import User from '../../ui/header/User'
import FlexDiv from '@/shared/FlexDiv'
import { Typography } from '@mui/material'

function Header() {
    return (
        <FlexDiv justifyContent='space-between' alignItems='center'>
            <FlexDiv>
                <Typography className='logo'>SlateCorn</Typography>
                <Control />
            </FlexDiv>
            <User />
        </FlexDiv>
    )
}

export default Header
