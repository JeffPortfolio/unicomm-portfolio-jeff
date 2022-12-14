import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'
import { baseUrlAuth, appName } from "../../constants/global";

const baseQuery = fetchBaseQuery({
    // baseUrl: process.env.BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers) => {
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.data?.statusCode === 403) {
        const refreshResult = await baseQuery(
                {url: baseUrlAuth + '/api/refreshToken',
                 method: 'POST',
                 body: {appName: appName}}, api, extraOptions)
        if (refreshResult?.data) {
            // store new token
            api.dispatch(setCredentials({...refreshResult.data}))
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
