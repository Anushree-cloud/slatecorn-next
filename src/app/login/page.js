'use client'
import { ROUTES } from '../../constants/routes'
import { initialSelectedItem } from '../../constants/sideNavigation'
import { selectSidebarItem } from '../../store/reducers/sidebar'
import { setLoading, setIsLoggedIn, setUser } from '../../store/reducers/user'
import { Button, InputAdornment, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { getLoggedInUser } from '../../services/users'
import React from 'react'
import FlexDiv from '../../shared/FlexDiv'
import Image from 'next/image'
import logo from '@/public/assets/images/logo.png'

export default function PageRoot() {
    const dispatch = useDispatch()
    const router = useRouter()
	
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [passwordVisibility, setPasswordVisibility] = React.useState(false)

	// const onLogin = async () => {
	// 	try{
	// 		const result = await signIn("credentials", {
    //             email,
    //             password,
    //             redirect: false
    //         })
	// 		console.log('32=>',result)

	// 		if(result?.ok) {
	// 			const response = await getLoggedInUser({ email })
	// 			console.log('27=>',response)
	// 			if(response.status === 200){
	// 				dispatch(setUser(response.data))
	// 				dispatch(setIsLoggedIn())
	// 				dispatch(selectSidebarItem(initialSelectedItem))
	// 				console.log('41=>',ROUTES.MAIN_ROUTES.dashboard)
	// 				router.push(ROUTES.MAIN_ROUTES.dashboard)
	// 			} else if(response.status === 202){
	// 				alert('User not found')
	// 			}
	// 		}
	// 	} catch(error){
	// 		console.log("error", error)
	// 	} finally {
	// 		setTimeout(() => dispatch(setLoading(false)), 1500)
	// 	}
	// }

	const onLogin = async () => {
		try{
			const response = await getLoggedInUser({ email })
			console.log('27=>',response)
			if(response.status === 200){
				dispatch(setUser(response.data))
				dispatch(setIsLoggedIn())
				dispatch(selectSidebarItem(initialSelectedItem))
				console.log('41=>',ROUTES.MAIN_ROUTES.dashboard)
				router.push(ROUTES.MAIN_ROUTES.dashboard)
			} else if(response.status === 202){
				alert('User not found')
			}
		} catch(error){
			console.log("error", error)
		} finally {
			setTimeout(() => dispatch(setLoading(false)), 1500)
		}
	}

	return (
		<FlexDiv
			justifyContent='center'
			customStyle={{
				width: '100%',
				height: 800,
			}}>
			<FlexDiv
				flexDirection='column'
				justifyContent='center'
				customStyle={{
					padding: '20px',
					width: '30%',
					height: '100%',
				}}>
				<Image src={logo.png} width={200} height={200} alt='logo' />
				<TextField
					variant='outlined'
					name='email'
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					style={{ width: '100%' }}
				/>
				<TextField
					variant='outlined'
					name='password'
					type={passwordVisibility ? 'text' : 'password'}
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete={false}
					slotProps={{
						input: {
							endAdornment:
								<InputAdornment>
									<Button onClick={() => setPasswordVisibility(!passwordVisibility)}>Eye Icon</Button>
								</InputAdornment>
						},
					}}
					style={{ width: '100%' }}
				/>
				<Button onClick={onLogin}>Login</Button>
			</FlexDiv>
		</FlexDiv>
	)
}
