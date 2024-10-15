import { createSlice } from '@reduxjs/toolkit'
import { notesActions } from '../actions/notes'

const initialState = {
	idCount: 1,
	listing: [],
	isRearrange: {
		0: false
	},
	slateId: null,
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
} = notesSlice.actions

export default notesSlice.reducer
