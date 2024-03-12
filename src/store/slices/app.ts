import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppState } from 'types/reduxStore.ts'

const initialState: AppState = {
  user: {
    name: '',
    email: '',
    token: '',
  },
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<AppState['user']>) => {
      state.user = action.payload
    },
  },
})
export const { addUser } = appSlice.actions
export default appSlice.reducer
