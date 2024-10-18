import React from 'react'
import { Typography } from '@mui/material'
import { MODULES, SECTIONS } from '@/constants/sideNavigation'
import ModuleLayout from '@/components/layouts/modules/ModuleLayout'
import useTypewriterEffect from '@/shared/hooks/useTypewriterEffect'
import { colorPalette } from '@/constants/colorPalette'
import FlexDiv from '@/shared/FlexDiv'

function DashBoard() {
	const typewriterTextValue = useTypewriterEffect('This DashBoard is looking like your life. Empty!!!!!!!!!!!', 100)
	return (
		<ModuleLayout moduleKey={MODULES.dashboard} sectionKey={SECTIONS.main}>
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