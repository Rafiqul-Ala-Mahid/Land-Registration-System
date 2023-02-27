import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Components/Main/Main'
import Home from './Components/Home/Home'
import Signin from './Components/SignIn/Signin'
import Signup from './Components/SignUp/Signup'
import Landingpage from './Components/LandingPage/Landingpage'
import SellerRegistry from './Components/Seller/SellerRegistry'
import BuyerDashboard from './Components/BuyerDashboard/BuyerDashboard'
import SellerDashboard from './Components/Seller/SellerDashboard/SellerDashboard'

function App() {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
          element: <Home></Home>,
        },
        {
          path: 'signin',
          element: <Signin></Signin>,
        },
        {
          path: 'signup',
          element: <Signup></Signup>,
        },
        {
          path: 'dashboard',
          element: <BuyerDashboard></BuyerDashboard>,
        },
        {
          path: 'sellerSignUp',
          element: <SellerRegistry></SellerRegistry>,
        },
        {
          path: 'sellerDashboard',
          element: <SellerDashboard></SellerDashboard>,
        },
      ],
    },
    {
      path: '/',
      element: <Landingpage></Landingpage>,
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
