'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import AppLayout from '@/components/layouts/AppLayout'

function Root(props) {
	return (
		<Provider store={store}>
			<AppLayout {...props} />
		</Provider>
	)
}

export default Root
