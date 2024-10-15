import { createSlice } from '@reduxjs/toolkit'
import { slatesActions } from '../actions/slates'

const initialState = {
    idCount: 1,
    listing: [],
    userId: 1
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
    }
})

export const { addSlate, editSlate, deleteSlate, deleteAll, pinSlate } = slatesSlice.actions

export default slatesSlice.reducer
