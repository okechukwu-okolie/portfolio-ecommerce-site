import {createBrowserRouter, RouterProvider, Route,Router, Routes, BrowserRouter} from 'react-router-dom'
import Home from './main-pages/Home'
import Nav from './static/Nav'
import SecondaryNav from './static/SecondaryNav'
import Footer from './static/Footer'
import ProductDetail from './main-pages/ProductDetail'
import Category from './main-pages/Category'
import Casual from './sub-main-page/Casual'
import ProductFilter from './main-pages/ProductFilter'
import Cart from './main-pages/Cart'
import Party from './sub-main-page/Party'
import Gym from './sub-main-page/Gym'
import Formal from './sub-main-page/Formal'
function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'nav',
      element:<Nav/>
    },
    {
      path:'product-details',
      element:<ProductDetail/>,
      children:[
        {
        index:true,
        element:<SecondaryNav/>,
        }
      ]
    },
    {
      path:'category',
      element:<Category/>,
      children:[
        
        {
          path:'casual',
          element: <Casual />,
        },
        {
          path:'formal',
          element:<Formal/>,
        },
        {
          path:'party',
          element:<Party/>,
        },
        {
          path:'gym',
          element:<Gym/>,
        },
      ]
    },
    {
      path:'product-filter',
      element:<ProductFilter/>
    },
    {
      path:'cart',
      element:<Cart/>
    },
    {
      path:'*',
      element:<h1> This page does not exist</h1>
    },
  ])

  return (
   <>
   <Nav/>
   <RouterProvider router = {routes}/>
   <Footer/> 
   </>
  )
}

export default App