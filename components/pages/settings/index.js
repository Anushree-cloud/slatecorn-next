"use client"
import React from 'react'
import { Typography } from '@mui/material'
import ModuleLayout from '@/components/layouts/modules/ModuleLayout'
import useTypewriterEffect from '@/shared/hooks/useTypewriterEffect'
import { colorPalette } from '@/constants/colorPalette'
import FlexDiv from '@/shared/FlexDiv'

function DashBoard() {
	const typewriterTextValue = useTypewriterEffect('Picture Abhi Baaki Hain Mere dost!', 100)
	return (
		<ModuleLayout>
			<FlexDiv
				justifyContent='center'
                padding={20}
                customStyle={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <Typography variant='h6' color={colorPalette.light}>{typewriterTextValue}</Typography>
            </FlexDiv>
			
		</ModuleLayout>
	)
}

export default DashBoard