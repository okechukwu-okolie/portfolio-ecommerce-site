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
import CombinedStatic from './static/CombinedStatic'
import Shop from './main-pages/Shop'
import TopSelling from './sub-main-page/TopSelling'
import NewArrival from './components/NewArrival'
function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<CombinedStatic/>,
      children:[
        {
          index:true,
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
              element: <Casual />,
            },
            {
              path:'formal',
              element:<Formal/>,
            },
            {
              path:'casual',
              element:<Casual/>,
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
          path:'shop',
          element:<Shop/>,
          children:[
            {
              index:true,
              element:<NewArrival/>
            },
            {
                path:'newArrival',
                element:<NewArrival/>
            },
            {
              path:'topSelling',
            element:<TopSelling/>
            },
          ],
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
      ],
      
    },
   
  ])

  return (
   <>
   {/* <Nav/> */}
   <RouterProvider router = {routes}/>
   {/* <Footer/>  */}
   </>
  )
}

export default App