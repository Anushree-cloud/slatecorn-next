import React from 'react'
import FlexDiv from '@/shared/FlexDiv'
import { Typography, TextField } from '@mui/material'

function FormField({
    label = '',
    value = '', 
    onChange = () => {}, 
    placeholder = '', 
    customStyle = { field: {}, input: {} },
    endAdornment = null, 
    startAdornment = null, 
    readOnly = false, 
    disabled = false,
    fullWidth = false,
    ...props
}) {
	return (
		<FlexDiv flexDirection="column" alignItems='flex-start' customStyle={{ width: '100%' }}>
			<Typography>{label}</Typography>
			<TextField
				value={value}
                variant='outlined'
                fullWidth={fullWidth}
				placeholder={placeholder}
				style={{
					...customStyle,
					borderRadius: 10,
					backgroundColor: 'white',
					boxShadow: '0px 0px 10px #8A9A9E',
				}}
				sx={{
					'& .MuiOutlinedInput-root': {
						...customStyle.input,
					},
				}}
				slotProps={{
					input: { startAdornment, endAdornment, readOnly },
				}}
                disabled={disabled}
				onChange={(event) =>
					onChange(event.target.value)
				}
				{...props}
			/>
		</FlexDiv>
	)
}

export default FormField
