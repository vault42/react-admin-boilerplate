import { createSlice } from '@reduxjs/toolkit'

interface IState {
  navOpen: boolean
}

const initialState: IState = {
  navOpen: true
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setNavOpen: (state, { payload }) => {
      state.navOpen = payload
    }
  }
})

export const { setNavOpen } = globalSlice.actions
export default globalSlice.reducer
