import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from '../firebase/database'

export const usersApi = createApi({

    reducerPath: "usersApi",

    baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),

    tagTypes: ["userImage"],

    endpoints: ( builder ) => ({

        patchImageProfile: builder.mutation({
            query: ({ image, localId })=> ({
                url: `usuarios/${localId}.json`,
                method: "PATCH",
                body: {image}
            }),
            invalidatesTags: ["userImage"]
        }),

        getUser: builder.query({
            query: ({ localId }) => `usuarios/${localId}.json`,
            transformResponse: ( response ) => {

                if( !response ) return { image: "" }
                if( !response.image ) return response.image = ""
                return response
            },
            providesTags: ["userImage"]
        })

    })

})

export const {  
    usePatchImageProfileMutation,
    useGetUserQuery
} = usersApi