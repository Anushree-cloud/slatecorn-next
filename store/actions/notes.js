import moment from "moment"

export const notesActions = {
	addNote : (state, actions) => {
		state.isRearrange = false
		state.listing.push({
			...actions.payload,
			id: state.idCount + 1,
			x: Math.floor(Math.random() * 1600),
			y: Math.floor(Math.random() * 500),
			createdAt: moment()
		})
		state.idCount = state.idCount + 1
	},
	editNote: (state, actions) => {
		const noteIndex = state.listing.findIndex(
			(note) => note.id === actions.payload.id
		)
		state.listing[noteIndex] = {
			...state.listing[noteIndex],
			...actions.payload,
		}
	},
	deleteNote: (state, actions) => {
		const filteredListing = state.listing.filter(
			(note) => note.id !== actions.payload.id
		)
		state.listing = filteredListing
	},
	deleteAll: (state) => {
		state.listing = []
	},
	scaleNote: (state, actions) => {
		const noteIndex = state.listing.findIndex(
			(note) => note.id === actions.payload.id
		)
		state.listing[noteIndex] = {
			...state.listing[noteIndex],
			isScaling: actions.payload.scale,
		}
	},
	dragNote: (state, actions) => {
		const noteIndex = state.listing.findIndex(
			(note) => note.id === actions.payload.id
		)
		state.listing[noteIndex] = {
			...state.listing[noteIndex],
			x: actions.payload.x,
			y: actions.payload.y,
		}
	},
	rearrange: (state) => {
		state.isRearrange = true
		state.listing = state.listing.map((note) => ({
			...note,
			position: 'initial',
		}))
	},
}