'use client'
import { createSlice } from '@reduxjs/toolkit'
import { sidebarActions } from '../actions/sidebar'
import { initialSelectedItem, sideNavigation } from '../../constants/sideNavigation'
import { ROUTES } from '../../constants/routes'

const routeName = window.location.pathname === '/' ? ROUTES.MAIN_ROUTES.dashboard : window.location.pathname

const selectedItem =
	sideNavigation
		.find((section) =>
			section.items.some(
				(subSection) => subSection.path === routeName
			)
		)
		?.items?.find(
			(subSection) => subSection.path === routeName
		) || initialSelectedItem

const initialState = {
	open: false,
	selectedItem,
}

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		openSidebar: sidebarActions.openSidebar,
		closeSidebar: sidebarActions.closeSidebar,
		selectSidebarItem: sidebarActions.selectSidebarItem,
	},
})

export const { openSidebar, closeSidebar, selectSidebarItem } =
	sidebarSlice.actions

export default sidebarSlice.reducer
