import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <Navigation/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
