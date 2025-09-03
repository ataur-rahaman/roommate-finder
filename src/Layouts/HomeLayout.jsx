import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Bounce, ToastContainer } from "react-toastify";
import ThemeProvider from "../theme/ThemeProvider";

const HomeLayout = () => {
  return (
    <ThemeProvider>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </ThemeProvider>
  );
};

export default HomeLayout;
