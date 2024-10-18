import { ROUTES } from './routes'
import dashboardIcon from '@/assets/icons/dashboardIcon.svg'
import dashboardIconSelected from '@/assets/icons/dashboardIconSelected.svg'
import settingsIcon from '@/assets/icons/settingsIcon.svg'
import settingsIconSelected from '@/assets/icons/settingsIconSelected.svg'
import slateIcon from '@/assets/icons/slateIconLight.svg'
import slateIconSelected from '@/assets/icons/slateIcon.svg'


export const sideNavigation = [
    {
        key: 'main',
        label: 'Main',
        items: [
            {
                key: 'dashboard',
                label: 'Dashboard',
                path: ROUTES.MAIN_ROUTES.dashboard,
                childItems: [],
                icon: dashboardIcon,
                selectedIcon: dashboardIconSelected,
                sidebar: true
            },
            {
                key: 'settings',
                label: 'Settings',
                path: ROUTES.MAIN_ROUTES.dashboard,
                icon: settingsIcon,
                selectedIcon: settingsIconSelected,
                sidebar: true,
                childItems: [
                    {
                        key: 'click',
                        label: 'Click',
                        path: ROUTES.MAIN_ROUTES.settings,
                        icon: settingsIcon,
                        selectedIcon: settingsIconSelected,
                        sidebar: true
                    },
                    {
                        key: 'click',
                        label: 'Click',
                        path: ROUTES.MAIN_ROUTES.settings,
                        icon: settingsIcon,
                        selectedIcon: settingsIconSelected,
                        sidebar: true
                    },
                ]
            },
        ]
    },
    {
        key: 'slates',
        label: 'Slates',
        items: [
            {
                key: 'slates',
                label: 'Listing',
                path: ROUTES.SLATE_ROUTES.listing,
                icon: slateIcon,
                selectedIcon: slateIconSelected,
                childItems: [],
                sidebar: true
            },
            {
                key: 'slate',
                label: 'Details',
                path: ROUTES.SLATE_ROUTES.view,
                icon: slateIcon,
                selectedIcon: slateIconSelected,
                childItems: [],
                sidebar: false
            },
        ]
    }
]

export const initialSelectedItem = {
    key: 'dashboard',
    label: 'Dashboard',
    path: ROUTES.MAIN_ROUTES.dashboard,
    childItems: [],
    icon: dashboardIcon,
    selectedIcon: dashboardIconSelected,
}

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