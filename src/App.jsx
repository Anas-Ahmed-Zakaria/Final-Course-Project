import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './pages/Home/Home'
import Carts from './pages/Carts/Carts'
import Products from './pages/Products/Products'
import Contact from './pages/Contact/Contact'
import Layout from "./Components/Layout/Layout"
import Prod from "./pages/Prod/Prod"
import { useState } from "react"
import { CartContext } from "./Store/CartContext/CartContext"
import Swal from "sweetalert2"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Customers from "./pages/Customers/Customers"
import Categories from "./pages/Categories/Categories"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import {Toaster} from "react-hot-toast"
import Mobiles from "./pages/Mobiles/Mobiles"
import Laptops from "./pages/Laptops/Laptops"
import Watches from "./pages/Watches/Watches"
import Accessories from "./pages/Accessories/Accessories"
import Overview from "./pages/Overview/Overview"

function App() {
  const [cartItems , setCartItems] = useState([]);
  const [count , setCount] = useState(0);
  const addToCart = (product) => {
    const checkItem = cartItems.find((item)=>item.id == product.id);
    if(checkItem) {
       const newItems = cartItems.map((item)=>{
          if(item.id == product.id){
             item.qty = item.qty + 1;
          }
          return item;
       });
       setCartItems([...newItems]);
    }else{
    let oldItems = cartItems;
    setCartItems([...oldItems , {...product, qty: 1}]);
    setCount(count + 1);
 }
 Swal.fire({
    icon: 'Success',
    title: 'Added To Cart',
 });
};

  const routing = createBrowserRouter([
   {path:'/' , element: <Login/>},
   {path:'/Register' , element: <Register/>},

   {path: '/' , element:<Layout/> , children:[
    {path:'/Home' , element: <Home/>},
    {path:'/Products' , element: <Products/>},
    {path:'/Products/:productId' , element: <Prod/>},
    {path:'/Carts' , element: <Carts/>},
    {path:'/Services' , element: <Services/>},
    {path:'/Categories' , element: <Categories/>},
    {path:'/Customers' , element: <Customers/>},
    {path:'/About' , element: <About/>},
    {path:'/Overview' , element: <Overview/>},
    {path:'/Contact' , element: <Contact/>},
    {path:'/Mobiles' , element: <Mobiles/>},
    {path:'/Laptops' , element: <Laptops/>},
    {path:'/Watches' , element: <Watches/>},
    {path:'/Accessories' , element: <Accessories/>},
  ]}]);
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <CartContext.Provider value={{cartItems,setCartItems , count , setCount , addToCart}}>
    <RouterProvider router={routing}/>
    </CartContext.Provider>

    </>
  )
}

export default App
