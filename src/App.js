import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Components/Main/Main'
import Home from './Components/Home/Home'
import Signup from './Components/SignUp/Signup'
import Landingpage from './Components/LandingPage/Landingpage'
import SellerRegistry from './Components/Seller/SellerRegistry'
import SellerDashboard from './Components/Seller/SellerDashboard/SellerDashboard'
import BuyerDashboard from "./Components/Buyer/BuyerDashboard/BuyerDashboard";
import AddLandSeller from './Components/Seller/AddLandSeller/AddLandSeller'


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
          path: 'signup',
          element: <Signup></Signup>,
        },
        {
          path: 'buyerDashboard',
          element:<BuyerDashboard></BuyerDashboard>
        },
        {
          path: 'sellerSignUp',
          element: <SellerRegistry></SellerRegistry>,
        },
        {
          path: 'sellerDashboard',
          element: <SellerDashboard></SellerDashboard>,
        },
        {
          path: 'addlandSeller',
          element:<AddLandSeller></AddLandSeller>
        }
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
  );
}


export default App
