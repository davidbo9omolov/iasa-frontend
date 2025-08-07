import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  AppState,
  SelectedTeamCard,
  TeamCard,
  PresidiumMember,
  SelectedPresidiumCard,
  PresidiumCard,
} from 'types/reduxStore.ts'

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

const initialPresidiumMember: PresidiumMember = {
  user: {
    name: '',
    email: '',
    token: '',
  },
  selectedPresidiumCard: {
    isOpen: false,
    presidiumCard: {
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

export const presidiumSlice = createSlice({
  name: 'presidium',
  initialState: initialPresidiumMember,
  reducers: {
    addPresidiumUser: (state, action: PayloadAction<PresidiumMember['user']>) => {
      state.user = action.payload
    },
    togglePresidiumCard: (state, action: PayloadAction<Partial<SelectedPresidiumCard> | undefined>) => {
      if (action.payload && typeof action.payload.isOpen !== 'undefined') {
        state.selectedPresidiumCard.isOpen = action.payload.isOpen
      } else {
        state.selectedPresidiumCard.isOpen = !state.selectedPresidiumCard.isOpen
      }
    },
    setPresidiumCard: (state, action: PayloadAction<PresidiumCard>) => {
      state.selectedPresidiumCard.presidiumCard = action.payload
    },
  },
})

export const { addUser, toggleTeamCard, setTeamCard } = appSlice.actions
export default appSlice.reducer

export const { addPresidiumUser, togglePresidiumCard, setPresidiumCard } = presidiumSlice.actions
export const presidiumReducer = presidiumSlice.reducer
