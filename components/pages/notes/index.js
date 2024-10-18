import React from 'react'
import { MODULES, SECTIONS } from '@/constants/sideNavigation'
import ModuleLayout from '@/components/layouts/modules/ModuleLayout'
import FlexDiv from '@/shared/FlexDiv'
import HeaderControl from '@/components/pages/slates/HeaderControl'
import SlateView from '@/components/pages/slates/SlateView'

function Notes({ slateId }) {
	return (
		<ModuleLayout
            headerChildren={<HeaderControl />}
            moduleKey={MODULES.slate} 
            sectionKey={SECTIONS.slates}>
			<FlexDiv
                customStyle={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <SlateView slateId={slateId} />
            </FlexDiv>
			
		</ModuleLayout>
	)
}

export default Notes