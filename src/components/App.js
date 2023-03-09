import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Layout = React.lazy(() => import("./Layout"));
const DepartmentPage = React.lazy(() => import("../pages/DepartmentPage"));
const TTNPage = React.lazy(() => import("../pages/TTNPage"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));

function App() {
  console.log("run");
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TTNPage />}></Route>
            <Route path="/departments" element={<DepartmentPage />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
