'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import AppLayout from '../layouts/AppLayout'
import { SessionProvider } from 'next-auth/react'

function Root({session, ...props}) {
	return (
		<SessionProvider session={session}>
			<Provider store={store}>
				<AppLayout {...props} />
			</Provider>
		</SessionProvider>
	)
}

export default Root
