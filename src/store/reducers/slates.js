import { createSlice } from '@reduxjs/toolkit'
import { slatesActions } from '../actions/slates'

const initialState = {
	idCount: 1,
	listing: [],
	userId: 1,
    searchValue: '',
}

const slatesSlice = createSlice({
	name: 'slates',
	initialState,
	reducers: {
		addSlate: slatesActions.addSlate,
		editSlate: slatesActions.editSlate,
		deleteSlate: slatesActions.deleteSlate,
		deleteAll: slatesActions.deleteAll,
		pinSlate: slatesActions.pinSlate,
		searchSlate: slatesActions.searchSlate,
	},
})

export const {
	addSlate,
	editSlate,
	deleteSlate,
	deleteAll,
	pinSlate,
	searchSlate,
} = slatesSlice.actions

export default slatesSlice.reducer
