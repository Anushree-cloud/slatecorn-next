'use client'
import React, { useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from '../../store'
import Header from '../pages/home/Header'
import FlexDiv from '../../shared/FlexDiv'
import SideNavigation from '../../components/pages/home/SideNavigation'
import { CircularProgress } from '@mui/material'
import { ROUTES } from '../../constants/routes'
import { setLoading } from '../../store/reducers/user'
import { useRouter } from 'next/navigation'

function AppLayout(props) {
    const dispatch = useDispatch()
    const router = useRouter()

    const {isLoggedIn, isLoading} = useSelector((state) => state.user)
	const authRoutes = Object.values(ROUTES.AUTH_ROUTES)

	useEffect(() => {
        // if(localStorage.getItem('isLoggedIn')){
        //     dispatch(selectSidebarItem(initialSelectedItem))
        // }
		if(localStorage.getItem('isLoggedIn') && authRoutes.includes(window.location.pathname)) {
			router.push(ROUTES.HOME)
		}
        // dispatch(setIsLoggedIn())
        setTimeout(() => dispatch(setLoading(false)), 2000)
	}, [])

	return (
		<>
			{isLoading ? 
				<FlexDiv justifyContent='center' customStyle={{ width: window.innerWidth, height: window.innerHeight }}>
					<CircularProgress />
				</FlexDiv>
				:
                isLoggedIn ?
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
                    :
                    <>
                        {props?.children}
                    </>
                }
			
		</>
	)
}

export default AppLayout
