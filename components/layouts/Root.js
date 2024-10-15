'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import Header from '../pages/home/Header'

function Root(props) {
	return (
		<>
			<Provider store={store}>
				<Header />
				{props.children}
			</Provider>
		</>
	)
}

export default Root
