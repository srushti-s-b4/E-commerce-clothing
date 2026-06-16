import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'

import banner_women from './Ecommerce_Assets (1)/Assets/Frontend_Assets/banner_women.png'
import banner_mens from './Ecommerce_Assets (1)/Assets/Frontend_Assets/banner_mens.png'
import banner_kids from './Ecommerce_Assets (1)/Assets/Frontend_Assets/banner_kids.png'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Shop />
        },
        {
          path: "/men",
          element: (
            <ShopCategory
              banner={banner_mens}
              category="men"
            />
          )
        },
        {
          path: "/women",
          element: (
            <ShopCategory
              banner={banner_women}
              category="women"
            />
          )
        },
        {
          path: "/kids",
          element: (
            <ShopCategory
              banner={banner_kids}
              category="kid"
            />
          )
        },
        {
          path: "/product/:productId",
          element: <Product />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App