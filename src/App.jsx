import {createBrowserRouter, RouterProvider, Route,Router, Routes} from 'react-router-dom'
import Home from './main-pages/Home'
import Nav from './static/Nav'
import SecondaryNav from './static/SecondaryNav'
import Footer from './static/Footer'
import ProductDetail from './main-pages/ProductDetail'
import Category from './main-pages/Category'
import Casual from './sub-main-pages/Casual'
import ProductFilter from './main-pages/ProductFilter'
import Cart from './main-pages/Cart'
function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
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
        index:true,
        element:<SecondaryNav/>,
        },
        {
          path:'casual',
          element: <Casual />
        }
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