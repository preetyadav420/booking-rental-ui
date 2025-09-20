import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingsPage from "./Components/ListingsPage";
import AllListingsPage from "./Components/AllListings";
import Navbar from "./Components/NavBar";
import { useEffect, useState } from "react";

const App = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    if (token) setToken(token);
  }, []);

  return (
    <BrowserRouter>
      {token && <Navbar setToken={setToken} />}
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />}></Route>
        <Route path="/mylistings" element={<ListingsPage />}></Route>
        <Route path="/listings" element={<AllListingsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
