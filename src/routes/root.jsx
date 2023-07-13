import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { CounterApp } from '../counter/CounterApp'
import { PokemonApp } from '../pokemon/PokemonApp'
import { TodoApp } from '../todo/todoApp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'counter',
        element: <CounterApp />
      },
      {
        path: 'pokemon',
        element: <PokemonApp />
      },
      {
        path: 'todo',
        element: <TodoApp />
      }
    ]
  }
])
