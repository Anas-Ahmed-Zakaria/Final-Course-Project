import { Outlet } from "react-router-dom";
import Navbars from "../Navbars/Navbars";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
    <Navbars/>
    <Outlet/>
    <Footer/>
    </>
  )
}
