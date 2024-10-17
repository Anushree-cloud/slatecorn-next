import React from 'react'
import Control from '../../ui/header/Control'
import User from '../../ui/header/User'
import FlexDiv from '@/shared/FlexDiv'
import { Typography } from '@mui/material'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'

function Header() {
    return (
        <FlexDiv justifyContent='space-between' alignItems='center' customStyle={{ marginBottom: 30 }}>
            <FlexDiv>
                {/* <Typography className='logo'>SlateCorn</Typography> */}
                <Image src={logo} alt="logo" width={100} height={100} />
                <Control />
                <Typography>Search Slateboard</Typography>
                <Typography>Stalk Folks</Typography>
            </FlexDiv>
            <User />
        </FlexDiv>
    )
}

export default Header
