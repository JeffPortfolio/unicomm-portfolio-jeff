import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: 'http://localhost:4000/api/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        register: builder.mutation({
            query: credentials => ({
                url: 'http://localhost:4000/api/registerUser',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        loggedIn: builder.mutation({
            query: credentials => ({
                url: 'http://localhost:4001/api/loggedIn',
                method: 'GET',
            })
        }),
        refreshToken: builder.mutation({
            query: credentials => ({
                url: 'http://localhost:4000/api/refreshToken',
                method: 'POST',
            })
        }),
        logout: builder.mutation({
            query: credentials => ({
                url: '/api/logout',
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