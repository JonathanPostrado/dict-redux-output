import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    {
      username: 'admin',
      password: 'admin',
      name: 'Admin User',
    },
    {
      username: 'user',
      password: 'user',
      name: 'Regular User',
    },    
  ],
  loginUsers: [],
  invalidLogin: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.invalidLogin = false
      const { username, password } = action.payload
      const i = state.users.findIndex(user => user.username === username && user.password === password)
      if (i >= 0) {
        state.loginUsers.push({...state.users[i]})
      } else {
        state.invalidLogin = true
      }
    },
    reset: (state) => {
      state.invalidLogin = null
    }
  },
})

export const { login, reset } = userSlice.actions

export default userSlice.reducer