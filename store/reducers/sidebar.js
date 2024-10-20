'use client'
import { createSlice } from '@reduxjs/toolkit'
import { sidebarActions } from '../actions/sidebar'
import { initialSelectedItem, sideNavigation } from '@/constants/sideNavigation'

const selectedItem =
	sideNavigation
		.find((section) =>
			section.items.some(
				(subSection) => subSection.path === window.location.pathname
			)
		)
		?.items?.find(
			(subSection) => subSection.path === window.location.pathname
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
