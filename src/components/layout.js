import { Outlet } from "react-router-dom";
import Header from "./header";
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
};

export default Layout;