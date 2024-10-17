import { TextField } from '@mui/material'
import React, { useEffect } from 'react'
import './hoverField.css'
import useDebounce from '@/shared/hooks/useDebounce'

function HoverField({
	value = '',
	onChange = () => {},
	placeholder = 'Type you folk...',
	customStyle = { input: {}, field: {} },
	customClass = '',
	endAdornment = null,
	startAdornment = null,
	readOnly = false,
	shouldDebounce = true,
	debounceHandler = () => {},
	...props
}) {
	const debounceValue = shouldDebounce ? useDebounce(value, 1500) : value

	useEffect(() => {
		if(shouldDebounce) debounceHandler(value)
	}, [debounceValue])

	return (
		<TextField
			variant="outlined"
			fullWidth
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			style={{
				...customStyle.field,
				borderRadius: 10,
				backgroundColor: 'white',
				boxShadow: '0px 0px 10px #8A9A9E',
				fontSize: '30px !important'
			}}
			slotProps={{
				input: { startAdornment, endAdornment, readOnly },
			}}
			{...props}
            className={`hover-field ${customClass}`}
			sx={{
				'& .MuiOutlinedInput-root': {
					...customStyle.input,
				},
			}}
		/>
	)
}

export default HoverField
