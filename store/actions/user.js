export const userActions = {
	login: (state, actions) => {
		return state
	},
	logout: () => {
		return ''
	},
	setUser: (state, actions) => {
		return state
	},
    updateUser: (state, actions) => {
        state.user = actions.payload
    },
}