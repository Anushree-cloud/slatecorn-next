'use client'
import React from 'react'
import ModuleHeader from './ModuleHeader'
import FlexDiv from '@/shared/FlexDiv'

function ModuleLayout({
    sectionKey,
    moduleKey, 
    headerChildren = <></>, 
    children 
}) {
    return (
        <FlexDiv
            flexDirection='column'
            alignItems='flex-start'
            padding={'10px 20px'}
            customStyle={{
                width: '100%',
                height: '100%',
            }}
        >
            <ModuleHeader moduleKey={moduleKey} sectionKey={sectionKey}>
                {headerChildren}
            </ModuleHeader>

            <div style={{ maxHeight: window.outerHeight - 200, width: '100%', overflow: 'auto' }}>
                {children}
            </div>

        </FlexDiv>
    )
}

export default ModuleLayout
