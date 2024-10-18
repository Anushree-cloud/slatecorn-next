import { createSlice } from '@reduxjs/toolkit' 
import { sidebarActions } from '../actions/sidebar'
import { initialSelectedItem } from '@/constants/sideNavigation'

const initialState = {
    open: false,
    selectedItem: initialSelectedItem,
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        openSidebar: sidebarActions.openSidebar,
        closeSidebar: sidebarActions.closeSidebar,
        selectSidebarItem: sidebarActions.selectSidebarItem
    }
})

export const { openSidebar, closeSidebar, selectSidebarItem } = sidebarSlice.actions

export default sidebarSlice.reducer