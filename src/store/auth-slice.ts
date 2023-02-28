import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProfile } from '@api/auth'
import { IProfile } from '@types'

interface IState {
  loading: boolean
  token: string | null
  profile: IProfile | null
}

export const handleProfile = createAsyncThunk('user-info', async () => {
  const data = await getProfile()
  return data.data
})

const initialState: IState = {
  loading: false,
  token: localStorage.getItem('token'),
  profile: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogout: (state) => {
      state.profile = null
      state.token = null
      localStorage.removeItem('token')
    },
    setToken: (state, { payload }) => {
      state.token = payload
      localStorage.setItem('token', payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleProfile.pending, (state) => {
        state.loading = true
      })
      .addCase(handleProfile.fulfilled, (state, { payload }) => {
        if (payload) {
          state.profile = payload
        }
        state.loading = false
      })
      .addCase(handleProfile.rejected, (state) => {
        state.loading = false
      })
  }
})

export const { handleLogout, setToken } = authSlice.actions

export default authSlice.reducer
