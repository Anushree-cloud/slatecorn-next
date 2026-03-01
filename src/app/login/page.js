'use client'
import { ROUTES } from '../../constants/routes'
import { initialSelectedItem } from '../../constants/sideNavigation'
import { selectSidebarItem } from '../../store/reducers/sidebar'
import { setLoading, setIsLoggedIn, setUser } from '../../store/reducers/user'
import { Button, FormControl, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { getLoggedInUser } from '../../services/users'
import React, { use, useEffect, useState } from 'react'
import FlexDiv from '../../shared/FlexDiv'
import Image from 'next/image'
import logo from '../../../public/assets/images/logo.png'
import { useFormik, useFormikContext } from 'formik'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import CardButton from '../../shared/buttons/CardButton'
import { colorPalette } from '../../constants/colorPalette'
import { login } from '../../services/auth'
import Link from 'next/link'

export default function PageRoot() {
    const dispatch = useDispatch()
    const router = useRouter()
	
	const [passwordVisibility, setPasswordVisibility] = React.useState(false)
	const [buttonDisabled, setButtonDisabled] = useState(true)

	const onLogin = async (values) => {
		try{
			console.log('30=>',values)
			const loginResponse = await login({ email: values.email, password: values.password })
			console.log('32=>',loginResponse)

			if(!loginResponse) {
				alert('User not found!')
				return
			}
			
			const response = await getLoggedInUser({ email: values.email })
			dispatch(setUser(response.data))
			dispatch(setIsLoggedIn())
			dispatch(selectSidebarItem(initialSelectedItem))
			router.push(ROUTES.MAIN_ROUTES.dashboard)
			
			
		} catch(error){
			console.log("=>error", passing)
			alert(error.message)
		} finally {
			setTimeout(() => dispatch(setLoading(false)), 1500)
		}
	}

	const { values: formilValues, handleChange, errors, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: onLogin
	})

	useEffect(() => {
		setButtonDisabled(!formilValues.email || !formilValues.password)
	}, [formilValues])

	return (
		<FlexDiv
			justifyContent='center'
			customStyle={{
				width: '100%',
				height: window.innerHeight,
			}}>
			
				<FlexDiv
					flexDirection='column'
					justifyContent='center'
					customStyle={{
						padding: '20px',
						width: '30%',
						height: '100%',
						margin: '40px 0px'
					}}>
					<Image src={logo} width={200} height={200} alt='logo' />
					<form onSubmit={handleSubmit} >
						<TextField
							autoComplete="off"
							variant='outlined'
							name='email'
							type='email'
							placeholder='Email'
							value={formilValues.email}
							onChange={(e) => handleChange(e)}
							style={{ width: '100%' }}
							sx={{
								'& .MuiOutlinedInput-input': {
									backgroundColor: 'antiquewhite !important',
									color: 'black !important',
									borderRadius: '5px !important',
								}
							}}
						/>
						<TextField
							autoComplete="new-password"
							variant='outlined'
							name='password'
							type={passwordVisibility ? 'text' : 'password'}
							placeholder='Password'
							value={formilValues.password}
							onChange={(e) => handleChange(e)}
							slotProps={{
								input: {
									endAdornment:
										<InputAdornment>
											<IconButton onClick={() => setPasswordVisibility(!passwordVisibility)}>
												{passwordVisibility ?  <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
											</IconButton>
										</InputAdornment>
								},
							}}
							style={{ width: '100%', marginTop: 10 }}
							sx={{
								'& .MuiOutlinedInput-input, .MuiOutlinedInput-root': {
									backgroundColor: 'antiquewhite !important',
									color: 'black !important',
									borderRadius: '5px !important',
								}
							}}
						/>
						<CardButton 
							name='Login' 
							type='submit' 
							width='100%' 
							backgroundColor={colorPalette.highlight} 
							disabled={buttonDisabled}
							customStyle={{ marginTop: 10 }}
						/>
					</form>

					<FlexDiv justifyContent='space-between' alignItems='center' customStyle={{ width: '100%' }}>
						<Link href="/login" passHref>
							<Typography variant="body2" sx={{ mt: 2, textAlign: "center", color: colorPalette.light }}>
								Already have an account? Sign in
							</Typography>
						</Link>

						<Link href={"/login"} passHref>
							<Typography variant="body2" sx={{ mt: 2, textAlign: "center", color: colorPalette.light }}>
								Forgot your password?
							</Typography>
						</Link>
					</FlexDiv>
					
				</FlexDiv>
		</FlexDiv>
	)
}
