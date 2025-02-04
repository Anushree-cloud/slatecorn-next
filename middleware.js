import { NextResponse } from 'next/server'
import { ROUTES } from '@/constants/routes'

export async function middleware(request) {
	const pathname = request.nextUrl.pathname
	const isPublicPath = Object.values(ROUTES.AUTH_ROUTES).includes(pathname)
	const userToken = cookies.get('token') || ''

	if (isPublicPath && userToken) {
		return NextResponse.redirect(
			new URL(ROUTES.MAIN_ROUTES.dashboard, request.url)
		)
	}

    if(!isPublicPath && !userToken) {
        return NextResponse.redirect(new URL(ROUTES.AUTH_ROUTES.login, request.url))
    }
}

export const config = { //matcher should include all the routes eitehr public or private, where the middleware will run
    matcher: [
        '/',
        '/dashboard',
    ]
}
