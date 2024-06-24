import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../context/index'

import { Home } from '../pages/home'
import { MyAccount } from '../pages/my-account'
import { MyOrder } from '../pages/my-order'
import { NotFound } from '../pages/not-found'
import { Orders } from '../pages/orders'
import { SignIn } from '../pages/sign-in'
import { Navbar } from '../components/navbar'
import { CheckoutSideMenu } from '../components/checkout-side-menu'
import '../App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:category', element: <Home /> },
    { path: '/my-orders', element: <Orders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes;
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
