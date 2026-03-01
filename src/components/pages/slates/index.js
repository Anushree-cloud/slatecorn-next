import React from 'react'
import ModuleLayout from '@/components/layouts/modules/ModuleLayout'
import FlexDiv from '@/shared/FlexDiv'
import SlatesLising from './SlatesListing'
import HeaderControl from './HeaderControl'

function Slates() {
	return (
		<ModuleLayout headerChildren={<HeaderControl />}>
			<FlexDiv
				customStyle={{
					width: '100%',
					height: '100%',
				}}
				alignItems="flex-start"
			>
				<SlatesLising />
			</FlexDiv>
		</ModuleLayout>
	)
}

export default Slates
