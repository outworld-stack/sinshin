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
    {path:"/sinshin/" , element:<Home/>},
    {path:"/sinshin" , element:<Home/>},
    {path:"/sinshin/products" , element:<Products/>},
    {path:"/sinshin/articles" , element:<Articles/>},
    {path:"/sinshin/product/:id" , element:<MainProduct/>},
    {path:"/sinshin/article/:id" , element:<MainArticle/>},
    {path:"/sinshin/aboutus" , element:<AboutUs/>},
    {path:"/sinshin/Gallery" , element:<Gallery/>},
    {path:"/*" , element:<NotFound/>},
]

export default routes