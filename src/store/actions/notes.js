import { dateFormates } from "../../constants/date"
import moment from "moment"

export const notesActions = {
	addNote : (state, actions) => {
		state.isRearrange = { [actions.payload.slateId]: false }
		state.listing.push({
			...actions.payload,
			id: state.idCount + 1,
			x: Math.floor(Math.random() * 1600),
			y: Math.floor(Math.random() * 500),
			createdAt: moment().format(dateFormates.fullDate)
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
	deleteAll: (state, actions) => {
		state.listing = state.listing.filter(note => note.slateId !== actions.payload.slateId)
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
	rearrange: (state, actions) => {
		state.isRearrange = { [actions.payload.slateId]: true }
		state.listing = state.listing.map((note) => ({
			...note,
			position: note.slateId === actions.payload.slateId ? 'initial' : 'absolute',
			// x: document.getElementById(`${note.id}`)?.getBoundingClientRect().x,
			// y: document.getElementById(`${note.id}`)?.getBoundingClientRect().y,
		}))
	},
	reAssignMovingPoints: (state, actions) => {
		state.listing = state.listing.map((note) => ({
			...note,
			x: document.getElementById(`${note.id}`)?.getBoundingClientRect().x,
			y: document.getElementById(`${note.id}`)?.getBoundingClientRect().y,
		}))
	},
	rePosition: (state, actions) => {
		const noteIndex = state.listing.findIndex(
			(note) => note.id === actions.payload.id
		)
		state.listing[noteIndex] = {
			...state.listing[noteIndex],
			position: 'absolute',
		}
	},
	loadSlate: (state, actions) => {
		state.isLoading = {[actions.payload.id]: actions.payload.loading}
	}
}