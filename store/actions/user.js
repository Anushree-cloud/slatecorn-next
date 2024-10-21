export const userActions = {
	setIsLoggedIn: (state, actions) => {
		const isLoggedIn = localStorage.getItem('isLoggedIn')
		if(isLoggedIn){
			state.isLoggedIn = isLoggedIn
		} else {
			localStorage.setItem('isLoggedIn', true)	
			state.isLoggedIn = true
		}
	},
	logout: (state) => {
		localStorage.removeItem('isLoggedIn')
		state.isLoggedIn = false
	},
	setUser: (state, actions) => {
		return state
	},
    updateUser: (state, actions) => {
        state.user = actions.payload
    },
	setLoading: (state, actions) => {
		state.isLoading = actions.payload
	},
}