import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: (id) => `todos/${id}`
    }),
    getTodos: builder.query({
      query: () => '/todos'
    })
  })
})

export const { useGetTodosQuery, useGetTodoQuery } = todoApi
