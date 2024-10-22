import React from 'react'
import User from '@/components/ui/header/User'
import FlexDiv from '@/shared/FlexDiv'
import logo from '@/public/assets/images/logo.png'
import Image from 'next/image'
import IconButtonCustom from '@/shared/buttons/IconButton'
import notificationIcon from '@/public/assets/icons/notificationLightIcon.svg'

function Header() {
	return (
		<FlexDiv
			padding={15}
			justifyContent="space-between"
			alignItems="center"
			customStyle={{
				background: 'rgba(0, 0, 0, 0.3)',
				boxShadow: 'inset rgb(43, 43, 43) 15px 5px 30px 4px',
                width: '100%'
			}}
		>
			<FlexDiv>
				<Image src={logo} alt="logo" width={100} height={100} />
			</FlexDiv>

			<FlexDiv>
				<IconButtonCustom icon={notificationIcon} onClick={() => alert('This is not implemented yet! Duck out!')} />
				<User />	
			</FlexDiv>
			
		</FlexDiv>
	)
}

export default Header
