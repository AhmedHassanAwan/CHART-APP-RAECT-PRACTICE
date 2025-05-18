import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './Authentication/Login.jsx'
import SignUp from './Authentication/SignUp.jsx'
import Chart from './Chart.jsx'


const router = createBrowserRouter([
  {
    path:"",
    element : <Layout/>,
    children : [
      {
        path:"/",
        element:<Login/>
      }, {
      path:"/sign",
      element:<SignUp/>
      }, {
        path:"/home",
        element:<Chart/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(

    

  <RouterProvider router={router}></RouterProvider>

)
