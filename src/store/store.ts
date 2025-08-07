import { configureStore } from '@reduxjs/toolkit'

import appReducer from '@/store/slices/app'
import { presidiumReducer } from '@/store/slices/app'

export const store = configureStore({
  reducer: {
    app: appReducer,
    presidium: presidiumReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
