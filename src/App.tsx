import Login from "./Components/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Listings from "./Components/Listings";
import { useEffect, useState } from "react";

const App = () => {
  const [jwtToken, setJwtToken] = useState(sessionStorage.getItem("jwt"));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            jwtToken ? (
              <Navigate to="/welcome" replace />
            ) : (
              <Login
                handleLogin={() => setJwtToken(sessionStorage.getItem("jwt"))}
              />
            )
          }
        ></Route>
        <Route
          path="/welcome"
          element={jwtToken ? <Listings /> : <Navigate to="/" replace />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
