import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    // baseUrl: '',
    credentials: 'include',
    prepareHeaders: (headers) => {
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    console.log(`result from base query: ${JSON.stringify(result)}`)

    if (result?.error?.data?.statusCode === 403) {
        console.log('sendong refresh token')
        // send refresh
        const refreshResult = await baseQuery(
                {url: 'http://localhost:4000/api/refreshToken',
                 method: 'POST',
                 body: {appName: 'Test Application'}}, api, extraOptions)
        // console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // store new token
            api.dispatch(setCredentials({...refreshResult.data, user}))
            // retry orig query
            result = baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})
