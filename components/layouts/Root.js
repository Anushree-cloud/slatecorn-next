'use client'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import Header from '../pages/home/Header'
import FlexDiv from '@/shared/FlexDiv'
import SideNavigation from '@/components/pages/home/SideNavigation'
import { CircularProgress } from '@mui/material'

function Root(props) {
	const [delayLoading, setDelayLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => setDelayLoading(false), 2000)
	}, [])

	return (
		<>
			{delayLoading ? 
				<FlexDiv justifyContent='center' customStyle={{ width: window.innerWidth, height: window.innerHeight }}>
					<CircularProgress />
				</FlexDiv>
				:
				<Provider store={store}>
					<FlexDiv 
						justifyContent='flex-start' 
						alignItems='flex-start' 
						customStyle={{ height: window.innerHeight }} 
						gap={0}
					>
						<FlexDiv
							customStyle={{
								width: 100,
								height: '100%',
								background: 'rgba(0, 0, 0, 0.3)',
								boxShadow: '0px -15px 50px 43px rgb(43 43 43), inset 0px -50px 30px 4px rgb(43 43 43)'
							}}
						>
							<SideNavigation />
						</FlexDiv>

						<FlexDiv 
							flexDirection='column'
							customStyle={{
								width: '100%',
								height: '100%',
							}}
							alignItems='flex-start'
							justifyContent='flex-start'
							gap={0}
						>
							<Header />

							{/* Layout */}
							<FlexDiv justifyContent='center' customStyle={{ width: '100%' }}>
								{props.children}
							</FlexDiv>
							
						</FlexDiv>

					</FlexDiv>
					
				</Provider>
			}
		</>
	)
}

export default Root
