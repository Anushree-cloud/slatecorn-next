import React from 'react'
import { sideNavigation } from '@/constants/sideNavigation'
import FlexDiv from '@/shared/FlexDiv'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { colorPalette } from '@/constants/colorPalette'

function ModuleHeader({ moduleKey, sectionKey, children }) {
    const section = sideNavigation.find(section => section.key === sectionKey)
    const module = section.items.find(module => module.key === moduleKey)
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
                <Typography variant='h5' style={{ marginLeft: 10 }} color={colorPalette.light}>{`${section.label} | ${module?.label}`}</Typography>
            </FlexDiv>
            <>
                {children}
            </>
        </FlexDiv>
    )
}

export default ModuleHeader
