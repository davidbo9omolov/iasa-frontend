import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppState, SelectedTeamCard, TeamCard } from 'types/reduxStore.ts'

const initialState: AppState = {
  user: {
    name: '',
    email: '',
    token: '',
  },
  selectedTeamCard: {
    isOpen: false,
    teamCard: {
      name: '',
      surname: '',
      position: '',
    },
  },
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<AppState['user']>) => {
      state.user = action.payload
    },
    toggleTeamCard: (state, action: PayloadAction<Partial<SelectedTeamCard> | undefined>) => {
      if (action.payload && typeof action.payload.isOpen !== 'undefined') {
        state.selectedTeamCard.isOpen = action.payload.isOpen
      } else {
        state.selectedTeamCard.isOpen = !state.selectedTeamCard.isOpen
      }
    },
    setTeamCard: (state, action: PayloadAction<TeamCard>) => {
      state.selectedTeamCard.teamCard = action.payload
    },
  },
})
export const { addUser, toggleTeamCard, setTeamCard } = appSlice.actions
export default appSlice.reducer
