import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from '../firebase/database'

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:URL_FIREBASE}),
    endpoints:(builder) => ({
        getCategories: builder.query({
            query: () => "/categorias.json"
        }),
        getProducts:builder.query({
            query:(category) => `/productos.json?orderBy="categoria"&equalTo="${category}"`,
            transformResponse:(response) =>{
                const data = Object.values(response)
                return data
            }
        }),
        getProduct:builder.query({
            query:(id) => `/productos/${id}.json`
        })

    })
})

export const {  
                useGetCategoriesQuery, 
                useGetProductsQuery, 
                useGetProductQuery
} = shopApi