export const sidebarActions = {
    openSidebar: (state) => {
        state.open = true
    },
    closeSidebar: (state) => {
        state.open = false
    },
    selectSidebarItem: (state, actions) => {
        state.selectedItem = actions.payload
    }
}