import Home from './../pages/Home'
import Products from './../pages/Products'
import AboutUs from './../pages/AboutUs'
import Articles from './../pages/Articles'
import NotFound from './NotFound'
import MainProduct from './../pages/MainProduct'
import MainArticle from './../pages/MainArticle'
import Gallery from './../pages/Gallery'


let routes = [
    {path:"/" , element:<Home/>},
    {path:"/home" , element:<Home/>},
    {path:"/sinshin" , element:<Home/>},
    {path:"/sinshin/" , element:<Home/>},
    {path:"/sinshin/home" , element:<Home/>},
    {path:"/products" , element:<Products/>},
    {path:"/articles" , element:<Articles/>},
    {path:"/product/:id" , element:<MainProduct/>},
    {path:"/article/:id" , element:<MainArticle/>},
    {path:"/aboutus" , element:<AboutUs/>},
    {path:"/Gallery" , element:<Gallery/>},
    {path:"*" , element:<NotFound/>},
]

export default routes