import React from 'react'
import FlexDiv from '@/shared/FlexDiv'
import IconButtonCustom from '@/shared/buttons/IconButton'
import menuOpenIcon from '@/assets/icons/listIconLight.svg'
import { Drawer, Icon, MenuItem, Typography } from '@mui/material'
import backIcon from '@/assets/icons/backIconLight.svg'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import { colorPalette } from '@/constants/colorPalette'
import { sideNavigation } from '@/constants/sideNavigation'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { openSidebar, closeSidebar, selectSidebarItem } from '@/store/reducers/sidebar'

function SideNavigation() {
    const router = useRouter()
    const dispatch = useDispatch()

    const sidebar = useSelector((state) => state.sidebar)

    const [isChildSectionOpen, setIsChildSectionOpen] = React.useState({
        sectionKey: false,
    })

    const onOpenNavDrawer = () => {
        dispatch(openSidebar())
    }

    const onCloseNavDrawer = () => {
        dispatch(closeSidebar())
    }

    const onSelectSidebarItem = (item) => {
        if(item?.childItems?.length > 0) {
            setIsChildSectionOpen({
                [item.key]: !isChildSectionOpen[item.key]
            })
            return
        }
        dispatch(selectSidebarItem(item))
        dispatch(closeSidebar())
        router.push(item.path)
    }

	return (
        <>
            <FlexDiv 
                flexDirection='column' 
                padding={'30px 10px'} 
                customStyle={{ 
                    height: '100%', 
                    width: '100%' 
                }}
            >
                <IconButtonCustom 
                    onClick={onOpenNavDrawer}
                    icon={menuOpenIcon} 
                    customStyle={{
                        icon: {
                            height: 30,
                            width: 30
                        }
                    }} 
                />
            </FlexDiv>

            <Drawer
                anchor='left'
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: 'rgba(30, 30, 30, 1)',
                        width: 300,
                        boxShadow: '0px 0px 10px #fff',
                        padding: '30px 10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px !important',
                    }
                }}
                open={sidebar.open} 
                // onClose={onCloseNavDrawer}
            >
                    <FlexDiv justifyContent='center'>
                        <IconButtonCustom 
                            icon={backIcon} 
                            onClick={onCloseNavDrawer}
                            customStyle={{
                                button: {
                                    boxShadow: '0px 0px 10px #fff',
                                    borderRadius: '50%',
                                    padding: 5
                                },
                                icon: {
                                    height: 30,
                                    width: 30
                                }
                            }}
                        />
                    </FlexDiv>
                    
                    <FlexDiv flexDirection='column'>
                        {sideNavigation.map((section) => {
                            return (
                                <FlexDiv 
                                    flexDirection='column'
                                    alignItems='flex-start'
                                    customStyle={{
                                        width: '100%',
                                    }}
                                >
                                    <Typography 
                                        color={colorPalette.light}
                                        fontSize={12}
                                        fontStyle={'italic'}
                                    >
                                        {section.sectionLabel}
                                    </Typography>

                                    {section.items.map((subSection) => {
                                        const isSubSectionSelected = sidebar.selectedItem?.key === subSection.key
                                        return (
                                            <>
                                                <MenuItem 
                                                    key={subSection.key}
                                                    style={{ 
                                                        width: '100%', 
                                                        padding: 0,
                                                    }}
                                                    onClick={() => onSelectSidebarItem(subSection)}
                                                    onClose={onCloseNavDrawer}
                                                >
                                                    <FlexDiv 
                                                        justifyContent='space-between' 
                                                        alignItems='center' 
                                                        gap={10} 
                                                        customStyle={{ 
                                                            width: '100%',
                                                            padding: 10,
                                                            borderRadius: 5,
                                                            backgroundColor: isSubSectionSelected ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.2)',  
                                                        }}
                                                    >
                                                        <Image src={isSubSectionSelected ? subSection.selectedIcon : subSection.icon} alt="back" width={20} height={20} />
                                                        <FlexDiv justifyContent='flex-start' customStyle={{ width: '80%' }}>
                                                            <Typography color={isSubSectionSelected ? colorPalette.highlight : colorPalette.light}>
                                                                {subSection.label}
                                                            </Typography>
                                                        </FlexDiv>
                                                    </FlexDiv>
                                                </MenuItem>

                                                {isChildSectionOpen[subSection.key] && subSection.childItems.map((childItem) => {
                                                    const isChildSectionSelected = sidebar.selectedItem?.childItems?.find(child => child.key === childItem.key)?.key === childItem.key
                                                    return (
                                                        <MenuItem 
                                                            key={childItem.key}
                                                            style={{ width: '100%', padding: '0px 10px' }}
                                                            onClick={() => onSelectSidebarItem(childItem)}
                                                        >
                                                            <FlexDiv 
                                                                justifyContent='space-between' 
                                                                alignItems='center' 
                                                                gap={10} 
                                                                customStyle={{ 
                                                                    width: '100%',
                                                                    padding: 10,
                                                                    borderRadius: 5,
                                                                    backgroundColor: isChildSectionSelected ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.2)',
                                                                }}
                                                            >
                                                                <Image src={isChildSectionSelected ? childItem.selectedIcon : childItem.icon} alt="back" width={20} height={20} />
                                                                <FlexDiv justifyContent='flex-start' customStyle={{ width: '80%' }}>
                                                                    <Typography color={isChildSectionSelected? colorPalette.highlight : colorPalette.light}>
                                                                        {childItem.label}
                                                                    </Typography>
                                                                </FlexDiv>
                                                            </FlexDiv>
                                                        </MenuItem>
                                                    )
                                                })}
                                            </>
                                        )
                                    })}
                                </FlexDiv>
                            )
                        })}

                        
                    </FlexDiv>
            </Drawer>
        </>
    )
}

export default SideNavigation