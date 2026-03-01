import React from 'react'
import { sideNavigation } from '@/constants/sideNavigation'
import FlexDiv from '@/shared/FlexDiv'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { colorPalette } from '@/constants/colorPalette'
import { useSelector } from 'react-redux'

function ModuleHeader({ children }) {
    const currentModule = useSelector((state) => state.sidebar.selectedItem)
    
    const section = sideNavigation.find(section => section?.key === currentModule?.sectionKey) || 'Unknown'
    
    const module = (currentModule?.isChild ? 
        section?.items?.find(module => module?.key === currentModule?.subSectionKey)
        :
        section?.items?.find(module => module?.key === currentModule?.key)) || 'Unknown'

    const childModule = currentModule?.isChild ?
        module?.childItems?.find(module => module?.key === currentModule?.key)
        : null
    
    return (
        <FlexDiv
            customStyle={{
                width: '100%',
                height: '80px'
            }}
            justifyContent='space-between'
            alignItems='center'
        >
            <FlexDiv
                customStyle={{
                    width: '40%',
                    height: '100%',
                }}
            >
                <Image src={module?.icon} alt="module" width={30} height={30} />
                <Typography variant='h5' style={{ marginLeft: 10 }} color={colorPalette.light}>{`${section?.label} | ${module?.label}${ childModule ? ' | ' + childModule?.label : ''}`}</Typography>
            </FlexDiv>
            <>
                {children}
            </>
        </FlexDiv>
    )
}

export default ModuleHeader
