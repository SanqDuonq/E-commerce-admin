import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/add";
import List from "./pages/list";
import Orders from "./pages/orders";
// import { useState } from "react";
import Login from "./components/login";
import Sidebar from "./components/sidebar";
export const backendUrl = import.meta.env.VITE_BACKEND_URL as string;
function App() {
  // const [token, setToken] = useState(``);
  return (
    <div className="bg-gray-50 min-h-screen">
      <>
        <Navbar />
        <hr />
        <div className="flex w-full">
          <Sidebar />
          {/* className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base" */}
          <div className="flex-grow-1 mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base mt-7"></div>
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </>
      {/* {token === "" ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base"></div>
            <Routes>
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </>
      )} */}
    </div>
  );
}

export default App;
