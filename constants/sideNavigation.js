import { ROUTES } from './routes'
import dashboardIcon from '@/public/assets/icons/dashboardIcon.svg'
import dashboardIconSelected from '@/public/assets/icons/dashboardIconSelected.svg'
import settingsIcon from '@/public/assets/icons/settingsIcon.svg'
import settingsIconSelected from '@/public/assets/icons/settingsIconSelected.svg'
import slateIcon from '@/public/assets/icons/slateIconLight.svg'
import slateIconSelected from '@/public/assets/icons/slateIcon.svg'
import userSettingsIcon from '@/public/assets/icons/userSettingsLight.svg'
import userSettingsIconSelected from '@/public/assets/icons/userSettings.svg'
import slateSettingsIcon from '@/public/assets/icons/slateSettingsLight.svg'
import slateSettingsIconSelected from '@/public/assets/icons/slateSettings.svg'

export const MODULES = {
    dashboard: 'dashboard',
    settings: 'settings',
    slates: 'slates',
    slate: 'slate',
}

export const SECTIONS = {
    main: 'main',
    slates: 'slates'
}

export const initialSelectedItem = {
    key: 'dashboard',
    label: 'Dashboard',
    path: ROUTES.MAIN_ROUTES.dashboard,
    childItems: [],
    icon: dashboardIcon,
    selectedIcon: dashboardIconSelected,
    sidebar: true,
    sectionKey: SECTIONS.main
}

export const sideNavigation = [
    {
        key: SECTIONS.main,
        label: 'Main',
        items: [
            {
                key: 'dashboard',
                label: 'Dashboard',
                path: ROUTES.MAIN_ROUTES.dashboard,
                childItems: [],
                icon: dashboardIcon,
                selectedIcon: dashboardIconSelected,
                sidebar: true,
                sectionKey: SECTIONS.main
            },
            {
                key: 'settings',
                label: 'Settings',
                path: '',
                icon: settingsIcon,
                selectedIcon: settingsIconSelected,
                sidebar: true,
                sectionKey: SECTIONS.main,
                childItems: [
                    {
                        key: 'user',
                        label: 'User',
                        path: ROUTES.MAIN_ROUTES.userSettings,
                        icon: userSettingsIcon,
                        selectedIcon: userSettingsIconSelected,
                        sidebar: true,
                        sectionKey: SECTIONS.main,
                        subSectionKey: MODULES.settings,
                        isChild: true,
                    },
                    {
                        key: 'slates',
                        label: 'Slates',
                        path: ROUTES.MAIN_ROUTES.slatesSettings,
                        icon: slateSettingsIcon,
                        selectedIcon: slateSettingsIconSelected,
                        sidebar: true,
                        sectionKey: SECTIONS.main,
                        subSectionKey: MODULES.settings,
                        isChild: true,
                    },
                ]
            },
        ]
    },
    {
        key: SECTIONS.slates,
        label: 'Slates',
        items: [
            {
                key: 'slates',
                label: 'Listing',
                path: ROUTES.SLATE_ROUTES.listing,
                icon: slateIcon,
                selectedIcon: slateIconSelected,
                childItems: [],
                sidebar: true,
                sectionKey: SECTIONS.slates
            },
            {
                key: 'slate',
                label: 'Details',
                path: ROUTES.SLATE_ROUTES.view,
                icon: slateIcon,
                selectedIcon: slateIconSelected,
                childItems: [],
                sidebar: false,
                sectionKey: SECTIONS.slates
            },
        ]
    }
]