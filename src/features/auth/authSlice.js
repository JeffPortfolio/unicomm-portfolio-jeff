import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, token: null, roles: null, appName: 'Test Application' },
    reducers: {
        setCredentials: (state, action) => {
            const { user, roles, accessToken } = action.payload
            // console.log(`action Playload = ${JSON.stringify(action.payload)}`)
            state.user = user
            state.token = accessToken
            state.roles = roles
            console.log(`state: ${JSON.stringify(state)}`)
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
            state.roles = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentRoles = (state) => state.auth.roles
export const selectCurrentAppName = (state) => state.auth.appName