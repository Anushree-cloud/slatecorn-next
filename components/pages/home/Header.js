import React from 'react'
import Control from '../../ui/header/Control'
import User from '../../ui/header/User'
import FlexDiv from '@/shared/FlexDiv'
import { Typography } from '@mui/material'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import IconButtonCustom from '@/shared/buttons/IconButton'
import menuOpenIcon from '@/assets/icons/listIcon.svg'

function Header() {
	return (
		<FlexDiv
			padding={15}
			justifyContent="space-between"
			alignItems="center"
			customStyle={{
				marginBottom: 30,
				background: 'rgba(0, 0, 0, 0.3)',
				boxShadow: '7px 0px 10px #cac2ca',
                width: '100%'
			}}
		>
			<FlexDiv>
				{/* <Typography className='logo'>SlateCorn</Typography> */}
				{/* <IconButtonCustom icon={menuOpenIcon} /> */}
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
