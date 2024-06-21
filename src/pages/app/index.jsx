import { useRoutes, BrowserRouter } from 'react-router-dom'

import { Home } from '../home'
import { MyAccount } from '../my-account'
import { MyOrder } from '../my-order'
import { NotFound } from '../not-found'
import { Orders } from '../orders'
import { SignIn } from '../sign-in'

import '../../App.css'
import { Navbar } from '../../components/navbar'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-orders', element: <Orders /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes;
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
