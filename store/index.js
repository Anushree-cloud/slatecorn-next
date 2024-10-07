import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './reducers/notes';
import userReducer from './reducers/user';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    user: userReducer,
  },
});
