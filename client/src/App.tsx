import './App.scss'
//import Dashboard from './components/dashboard/Dashboard'
//import Login from './components/login/Login'
//import Register from './components/register/Register'

// Import React router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Login</div>
  },
  {
    path: '/register',
    element: <div>Register</div>
  },
  {
    path: '/dashboard',
    element: <div>Dashboard</div>
  }

])

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
