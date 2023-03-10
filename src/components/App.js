import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./Loading/Loading";
const Layout = React.lazy(() => import("./Layout"));
const DepartmentPage = React.lazy(() => import("../pages/DepartmentPage"));
const TTNPage = React.lazy(() => import("../pages/TTNPage"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));
const HomePage = React.lazy(() => import("../pages/HomePage"));

function App() {
  console.log("run");
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/ttn" element={<TTNPage />}></Route>
            <Route path="/departments" element={<DepartmentPage />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
