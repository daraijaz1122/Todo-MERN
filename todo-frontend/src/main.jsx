import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ToastContainer} from "react-toastify"
import Navbar from './components/Navbar.jsx'
import { createBrowserRouter, Outlet, Router, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import CompletedTodos from './components/CompletedTodos.jsx'
import Error from './components/Error.jsx'
import 'react-toastify/dist/ReactToastify.css';

const AppLayout =() => {
  return (

      <div>
        <Navbar/>
        <Outlet/>
      </div>
    
  )
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element:<Body/>
      }, {
        path: '/completedtodos',
        element:<CompletedTodos/>
      },  {
        path: "/home",
        element:<Body/>
      }
    ],
    errorElement:<Error/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position="top-center"/>
      <RouterProvider router={appRouter} />
      
  </StrictMode>,
)