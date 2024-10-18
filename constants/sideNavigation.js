import { ROUTES } from './routes'
import dashboardIcon from '@/assets/icons/dashboardIcon.svg'
import dashboardIconSelected from '@/assets/icons/dashboardIconSelected.svg'
import settingsIcon from '@/assets/icons/settingsIcon.svg'
import settingsIconSelected from '@/assets/icons/settingsIconSelected.svg'
import slateIcon from '@/assets/icons/slateIconLight.svg'
import slateIconSelected from '@/assets/icons/slateIcon.svg'


export const sideNavigation = [
    {
        section: 'main',
        sectionLabel: 'Main',
        items: [
            {
                key: 'dashboard',
                label: 'Dashboard',
                path: ROUTES.MAIN_ROUTES.dashboard,
                childItems: [],
                icon: dashboardIcon,
                selectedIcon: dashboardIconSelected,
            },
            {
                key: 'settings',
                label: 'Settings',
                path: ROUTES.MAIN_ROUTES.dashboard,
                icon: settingsIcon,
                selectedIcon: settingsIconSelected,
                childItems: [
                    {
                        key: 'click',
                        label: 'Click',
                        path: ROUTES.MAIN_ROUTES.settings,
                        icon: settingsIcon,
                        selectedIcon: settingsIconSelected,
                    },
                    {
                        key: 'click',
                        label: 'Click',
                        path: ROUTES.MAIN_ROUTES.settings,
                        icon: settingsIcon,
                        selectedIcon: settingsIconSelected,
                    },
                ]
            },
        ]
    },
    {
        section: 'slates',
        sectionLabel: 'Slates',
        items: [
            {
                key: 'slates',
                label: 'Slates',
                path: ROUTES.SLATE_ROUTES.listing,
                icon: slateIcon,
                selectedIcon: slateIconSelected,
                childItems: []
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