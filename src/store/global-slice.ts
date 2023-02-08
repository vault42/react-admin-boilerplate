import { createSlice } from '@reduxjs/toolkit'

interface IState {
  navOpen: boolean
  primaryColor: string
}

const initialState: IState = {
  navOpen: true,
  primaryColor: 'cyan'
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setNavOpen: (state, { payload }) => {
      state.navOpen = payload
    },
    setPrimaryColor: (state, { payload }) => {
      state.primaryColor = payload
    }
  }
})

export const { setNavOpen, setPrimaryColor } = globalSlice.actions
export default globalSlice.reducer
