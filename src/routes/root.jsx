import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { CounterApp } from '../counter/CounterApp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'counter',
        element: <CounterApp />
      }
    ]
  }
])
