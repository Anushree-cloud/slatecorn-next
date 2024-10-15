import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './reducers/notes';
import userReducer from './reducers/user';
import slatesReducer from './reducers/slates';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    user: userReducer,
    slates: slatesReducer,
  },
});
