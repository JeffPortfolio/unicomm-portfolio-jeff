import { apiSlice } from "../../app/api/apiSlice";
import { baseUrlApp, baseUrlAuth } from "../../constants/global";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: baseUrlAuth + '/api/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        register: builder.mutation({
            query: credentials => ({
                url: baseUrlAuth + '/api/registerUser',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        loggedIn: builder.mutation({
            query: credentials => ({
                url: baseUrlApp + '/api/loggedIn',
                method: 'GET',
            })
        }),
        refreshToken: builder.mutation({
            query: credentials => ({
                url: baseUrlAuth + '/api/refreshToken',
                method: 'POST',
            })
        }),
        logout: builder.mutation({
            query: credentials => ({
                url: baseUrlAuth + '/api/logout',
                method: 'GET',
            })
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useLoggedInMutation,
    useRefreshTokenMutation,
    useLogoutMutation
} = authApiSlice