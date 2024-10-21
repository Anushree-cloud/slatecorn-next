
export const ROUTES = {
    AUTH_ROUTES: {
        login: '/login',
        register: '/register',
        forgotPassword: '/forgot-password',
        resetPassword: '/reset-password',
    },
    MAIN_ROUTES: {
        dashboard: '/dashboard',
        userSettings: '/settings/user',
        slatesSettings: '/settings/slates',
    },
    SLATE_ROUTES: {
        listing: '/slates/list',
        view: '/slates/:slateId',
    },
    PROFILE: {
        user: '/profile',
    }
}