
import { createSlice } from '@reduxjs/toolkit'
import { notesActions } from '../actions/notes'

const initialState = {
	idCount: 1,
	listing: [],
	isRearrange: {
		0: false
	},
	slateId: null,
	isLoading: {
		0: false,
	},
}

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		addNote: notesActions.addNote,
		editNote: notesActions.editNote,
		deleteNote: notesActions.deleteNote,
		deleteAll: notesActions.deleteAll,
		scaleNote: notesActions.scaleNote,
		dragNote: notesActions.dragNote,
		rearrange: notesActions.rearrange,
		rePosition: notesActions.rePosition,
		reAssignMovingPoints: notesActions.reAssignMovingPoints,
		loadSlate: notesActions.loadSlate
	},
})

export const {
	addNote,
	editNote,
	deleteNote,
	deleteAll,
	dragNote,
	rearrange,
	scaleNote,
	rePosition,
	reAssignMovingPoints,
	loadSlate
} = notesSlice.actions

export default notesSlice.reducer
