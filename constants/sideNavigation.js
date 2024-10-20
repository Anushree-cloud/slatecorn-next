import { ROUTES } from './routes'
import dashboardIcon from '@/assets/icons/dashboardIcon.svg'
import dashboardIconSelected from '@/assets/icons/dashboardIconSelected.svg'
import settingsIcon from '@/assets/icons/settingsIcon.svg'
import settingsIconSelected from '@/assets/icons/settingsIconSelected.svg'
import slateIcon from '@/assets/icons/slateIconLight.svg'
import slateIconSelected from '@/assets/icons/slateIcon.svg'

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
                        icon: settingsIcon,
                        selectedIcon: settingsIconSelected,
                        sidebar: true,
                        sectionKey: SECTIONS.main,
                        subSectionKey: MODULES.settings,
                        isChild: true,
                    },
                    {
                        key: 'slates',
                        label: 'Slates',
                        path: ROUTES.MAIN_ROUTES.slatesSettings,
                        icon: settingsIcon,
                        selectedIcon: settingsIconSelected,
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